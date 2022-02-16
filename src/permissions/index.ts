import { destroyStream } from '../stream/common'

type MediaPermission = 'camera' | 'microphone'

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

export function requestPermission(options: {
  name: MediaPermission
  onSuccess?: () => void
  onFailure?: () => void
}) {
  const key = { camera: 'audio', microphone: 'video' }[options.name]

  navigator.mediaDevices.getUserMedia({ [key]: true })
    .then(() => options.onSuccess?.())
    .catch(() => options.onFailure?.())
}

export function watchPermission(name: MediaPermission, onChange: (status: PermissionStatus) => void, immediate?: boolean) {
  return navigator.permissions
    .query({ name: name as PermissionName })
    .then((status) => {
      if (immediate) onChange(status)
      status.addEventListener('change', () => onChange(status))

      /** Destroy permission watcher */
      return () => {
        status.removeEventListener('change', () => onChange(status))
      }
    })
}

export function watchPermissions(
  names: MediaPermission[],
  onChange: (name: MediaPermission, status: PermissionStatus) => void,
  immediate?: boolean
) {
  const destroyFns: Promise<VoidFunction>[] = []

  names.forEach(name =>
    destroyFns.push(
      watchPermission(name, i => onChange(name, i), immediate)
    )
  )

  /** Destroy watcher */
  return () => {
    Promise.all(destroyFns).then(fns =>
      fns.forEach(fn => fn?.())
    )
  }
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
