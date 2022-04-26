import { destroyStream } from '../stream/common'

export type MediaPermission = 'camera' | 'microphone'

/** Requests all media permissions such as: `camera` `microphone` */
export function requestMediaPermissions() {
  return Promise.all([
    navigator.mediaDevices.getUserMedia({ audio: true }),
    navigator.mediaDevices.getUserMedia({ video: true }),
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
  ])
    .then((streams) => {
      streams.forEach(i => destroyStream(i))
      return true
    })
    .catch(() => false)
}

/** Requests a specific media permission */
export function requestPermission(name: MediaPermission) {
  const key = { camera: 'video', microphone: 'audio' }[name]

  return navigator.mediaDevices.getUserMedia({ [key]: true })
    .then(() => true)
    .catch(() => false)
}

/**
 * Watch a media permission
 * @param name Name of the permission to watch
 * @param onChange Callback function that is triggered when permission is changed
 * @param immediate Invoke `onChange` immediately on initialization
 * @returns Function that destroys the watcher when invoked
 */
export function watchPermission(name: MediaPermission, onChange: (status: PermissionStatus) => void, immediate?: boolean) {
  const destroy = navigator.permissions
    .query({ name: name as PermissionName })
    .then((status) => {
      if (immediate) onChange(status)
      status.addEventListener('change', () => onChange(status))

      return () => status.removeEventListener('change', () => onChange(status))
    })

  /** Destroy permission watcher */
  return () => {
    destroy.then(fn => fn?.())
  }
}

/**
 * Watch multiple media permissions
 * @param names Names of the permissions to watch
 * @param onChange Callback function that is triggered when a permission is changed
 * @param immediate Invoke `onChange` immediately on initialization for respective permissions
 * @returns Function that destroys the watcher when invoked
 */
export function watchPermissions(
  names: MediaPermission[],
  onChange: (name: MediaPermission, status: PermissionStatus) => void,
  immediate?: boolean
) {
  const destroyFns: VoidFunction[] = []

  names.forEach(name =>
    destroyFns.push(
      watchPermission(name, i => onChange(name, i), immediate)
    )
  )

  /** Destroy watcher */
  return () => destroyFns.forEach(fn => fn?.())
}

/** Check if permission has been given for a media (camera/microphone) */
export function hasPermission(name: MediaPermission) {
  return navigator.permissions
    .query({ name: name as PermissionName })
    .then((status) => {
      return status.state === 'granted'
    })
}

/** Check if both microphone and camera permissions are given */
export function hasMediaPermissions(name: MediaPermission) {
  return Promise.all([
    hasPermission('camera'),
    hasPermission('microphone')
  ])
    .then(i => i[0] && i[1])
}
