import { destroyStream } from './common'

/** Fires when all tracks of a stream ends */
export function onTracksEnded(stream: MediaStream, callback: () => void) {
  const tracks = stream.getTracks()
  const tracksRunning = tracks.map(i => i.enabled && i.readyState === 'live')

  tracks.forEach((track, index) =>
    track.addEventListener('ended', () => {
      tracksRunning[index] = false
      if (!tracksRunning.find(i => i === true)) callback()
    })
  )
}

/**
 * Fires when any track of a stream ends
 * @param destroy Whether to destroy the stream when any track stops
 * @returns {Function} Function that stops the watcher
 */
export function onAnyTrackEnded(stream: MediaStream, callback: () => void, destroy?: boolean) {
  const tracks = stream.getTracks()

  function unregister(i: any) {
    tracks.forEach(e => e.removeEventListener('ended', i))
    if (destroy) destroyStream(stream)
  }

  function listener() {
    callback()
    unregister(listener)
  }

  tracks.forEach(i => i.addEventListener('ended', listener))
  return unregister.bind(unregister, listener)
}
