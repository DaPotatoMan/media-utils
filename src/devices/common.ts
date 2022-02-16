/**
 * @returns All/Preferred devices using `enumerateDevices`
 */
export function getDevices(kind?: MediaDeviceKind) {
  return navigator.mediaDevices.enumerateDevices().then((devices) => {
    if (kind) return devices.filter(i => i.kind === kind)
    return devices
  })
}

export function getCategorizedDevices() {
  return getDevices().then((devices) => {
    const list = {} as Record<MediaDeviceKind, MediaDeviceInfo[]>
    devices.forEach(i => list[i.kind].push(i))

    return list
  })
}

/**
 * @param key - Key param to be matched
 * @param value - Value of the key param to be matched
 * @returns Filtered media devices
 */
export function getFilteredDevices<T extends keyof MediaDeviceInfo>(key: T, value: MediaDeviceInfo[T]) {
  return getDevices().then(devices => devices.filter(i => i?.[key] === value))
}

/**
 * Finds a device from all or provided media devices
 * @param key - Key param to be matched
 * @param value - Value of the key param to be matched
 * @param devices - If passed, device will be searched from provided devices
 * @returns Media device
 */
export async function getDevice<T extends keyof MediaDeviceInfo>(key: T, value: MediaDeviceInfo[T], devices?: MediaDeviceInfo[]) {
  const entries = devices || await getDevices()

  return entries.filter(i => i?.[key] === value)
}
