import { destroyStream } from './common'

/** Amplifies audio track of given stream */
export function amplifyStream(stream: MediaStream, level: number) {
  const [audioTrack] = stream.getAudioTracks()
  const streamClone = new MediaStream([audioTrack])

  const ctx = new AudioContext()
  const source = ctx.createMediaStreamSource(streamClone)
  const destination = ctx.createMediaStreamDestination()

  // Filter
  const gainNode = ctx.createGain()
  gainNode.gain.value = level;

  [source, gainNode as AudioNode, destination]
    .reduce((a, b) => a && a.connect(b))

  const [newTrack] = destination.stream.getAudioTracks()

  stream.removeTrack(audioTrack)
  stream.addTrack(newTrack)

  /** Destroys amplifier and source stream */
  function destroy() {
    destroyStream(stream)
    destroyStream(streamClone)
    destroyStream(destination.stream)

    destination.disconnect()
    source.disconnect()

    if (ctx.state !== 'closed') ctx.close()
  }

  /** Sets amplifier level */
  function setLevel(value: number) {
    gainNode.gain.value = value
  }

  return { destroy, setLevel }
}

/**
 * @returns New stream with all audio tracks combined in the video stream
 */
export function muxStreams(videoStream: MediaStream, ...audioStream: MediaStream[]) {
  audioStream.forEach(stream =>
    stream.getAudioTracks().forEach(track =>
      videoStream.addTrack(track)
    )
  )

  return videoStream
}
