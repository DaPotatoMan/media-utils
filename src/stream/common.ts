/** Stops and removes given audio stream
 * @param stream - The stream to be destoyed
 * @param emitEvent - Triggers events such as `ended` and `removetrack`
 */
export function destroyStream(stream?: MediaStream, emitEvent?: boolean) {
  if (!stream) return

  stream.getTracks().forEach((track) => {
    track.stop()
    stream.removeTrack(track)

    if (emitEvent) {
      track.dispatchEvent(new Event('ended'))
      stream.dispatchEvent(new Event('removeTrack'))
    }
  })
}

/** Stops and removes given audio streams
 * @param streams - Array of streams to be destoyed
 * @param emitEvent - Triggers events such as `ended` and `removetrack`
 */
export function destroyStreams(streams?: MediaStream[], emitEvent?: boolean) {
  if (!streams?.length) throw new Error('No stream was passed')

  streams.forEach(stream => stream.getTracks().forEach((track) => {
    track.stop()
    stream.removeTrack(track)

    if (emitEvent) {
      track.dispatchEvent(new Event('ended'))
      stream.dispatchEvent(new Event('removetrack'))
    }
  }))
}

/** @returns Media stream using `getUserMedia` */
export function getStream(constraints?: MediaStreamConstraints) {
  return navigator.mediaDevices.getUserMedia(constraints)
}
