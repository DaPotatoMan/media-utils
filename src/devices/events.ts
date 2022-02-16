import { EventBus } from '../utils'
import { getDevice, getDevices } from './common'

/**
 * Triggers callback when a media device changes
 * @returns void function to destroy the listener
 */
export function onDeviceChange(listener: (this: MediaDevices, ev: Event) => any, options?: boolean | AddEventListenerOptions) {
  navigator.mediaDevices.addEventListener('devicechange', listener, options)

  /** Destroys listener */
  return () => navigator.mediaDevices.removeEventListener('devicechange', listener, options)
}

export function watchDevice<T extends keyof MediaDeviceInfo>(key: T, value: MediaDeviceInfo[T]) {
  const events = new EventBus<'added' | 'removed'>()

  let deviceExists = false
  const updateDevice = () => getDevice(key, value).then(([i]) => deviceExists = !!i);

  (async() => {
    await updateDevice()

    onDeviceChange(async() => {
      const device = await getDevice(key, value)

      if (deviceExists && !device) events.emit('removed')
      else if (!deviceExists && device) events.emit('added')

      deviceExists = !!device
    })
  })()

  return events
}

/**
 * Triggers callback when a media device changes
 * @param immediate Triggers the `onUpdate` callback on init
 * @returns void function to destroy the listener
 */
export function watchDevicesList(onUpdate: (data: MediaDeviceInfo[]) => void, immediate?: true) {
  const update = () => getDevices().then(onUpdate)

  if (immediate) update()
  return onDeviceChange(update, { passive: true })
}
