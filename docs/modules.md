[media-utils](README.md) / Exports

# media-utils

## Table of contents

### Type aliases

- [MediaPermission](modules.md#mediapermission)

### Functions

- [amplifyStream](modules.md#amplifystream)
- [destroyStream](modules.md#destroystream)
- [destroyStreams](modules.md#destroystreams)
- [getCategorizedDevices](modules.md#getcategorizeddevices)
- [getDevice](modules.md#getdevice)
- [getDevices](modules.md#getdevices)
- [getFilteredDevices](modules.md#getfiltereddevices)
- [getStream](modules.md#getstream)
- [hasMediaPermissions](modules.md#hasmediapermissions)
- [hasPermission](modules.md#haspermission)
- [muxStreams](modules.md#muxstreams)
- [onAnyTrackEnded](modules.md#onanytrackended)
- [onDeviceChange](modules.md#ondevicechange)
- [onTracksEnded](modules.md#ontracksended)
- [requestMediaPermissions](modules.md#requestmediapermissions)
- [requestPermission](modules.md#requestpermission)
- [watchDevice](modules.md#watchdevice)
- [watchDevicesList](modules.md#watchdeviceslist)
- [watchPermission](modules.md#watchpermission)
- [watchPermissions](modules.md#watchpermissions)

## Type aliases

### MediaPermission

Ƭ **MediaPermission**: ``"camera"`` \| ``"microphone"``

#### Defined in

[src/permissions/index.ts:3](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/permissions/index.ts#L3)

## Functions

### amplifyStream

▸ **amplifyStream**(`stream`, `level`): `Object`

Amplifies audio track of given stream

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |
| `level` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `destroy` | () => `void` |
| `setLevel` | (`value`: `number`) => `void` |

#### Defined in

[src/stream/audio.ts:4](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/stream/audio.ts#L4)

___

### destroyStream

▸ **destroyStream**(`stream?`, `emitEvent?`): `void`

Stops and removes given audio stream

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream?` | `MediaStream` | The stream to be destoyed |
| `emitEvent?` | `boolean` | Triggers events such as `ended` and `removetrack` |

#### Returns

`void`

#### Defined in

[src/stream/common.ts:5](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/stream/common.ts#L5)

___

### destroyStreams

▸ **destroyStreams**(`streams?`, `emitEvent?`): `void`

Stops and removes given audio streams

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `streams?` | `MediaStream`[] | Array of streams to be destoyed |
| `emitEvent?` | `boolean` | Triggers events such as `ended` and `removetrack` |

#### Returns

`void`

#### Defined in

[src/stream/common.ts:23](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/stream/common.ts#L23)

___

### getCategorizedDevices

▸ **getCategorizedDevices**(): `Promise`<`Record`<`MediaDeviceKind`, `MediaDeviceInfo`[]\>\>

#### Returns

`Promise`<`Record`<`MediaDeviceKind`, `MediaDeviceInfo`[]\>\>

#### Defined in

[src/devices/common.ts:11](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/devices/common.ts#L11)

___

### getDevice

▸ **getDevice**<`T`\>(`key`, `value`, `devices?`): `Promise`<`MediaDeviceInfo`[]\>

Finds a device from all or provided media devices

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `MediaDeviceInfo` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `T` | Key param to be matched |
| `value` | `MediaDeviceInfo`[`T`] | Value of the key param to be matched |
| `devices?` | `MediaDeviceInfo`[] | If passed, device will be searched from provided devices |

#### Returns

`Promise`<`MediaDeviceInfo`[]\>

Media device

#### Defined in

[src/devices/common.ts:36](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/devices/common.ts#L36)

___

### getDevices

▸ **getDevices**(`kind?`): `Promise`<`MediaDeviceInfo`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind?` | `MediaDeviceKind` |

#### Returns

`Promise`<`MediaDeviceInfo`[]\>

All/Preferred devices using `enumerateDevices`

#### Defined in

[src/devices/common.ts:4](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/devices/common.ts#L4)

___

### getFilteredDevices

▸ **getFilteredDevices**<`T`\>(`key`, `value`): `Promise`<`MediaDeviceInfo`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `MediaDeviceInfo` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `T` | Key param to be matched |
| `value` | `MediaDeviceInfo`[`T`] | Value of the key param to be matched |

#### Returns

`Promise`<`MediaDeviceInfo`[]\>

Filtered media devices

#### Defined in

[src/devices/common.ts:25](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/devices/common.ts#L25)

___

### getStream

▸ **getStream**(`constraints?`): `Promise`<`MediaStream`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints?` | `MediaStreamConstraints` |

#### Returns

`Promise`<`MediaStream`\>

Media stream using `getUserMedia`

#### Defined in

[src/stream/common.ts:38](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/stream/common.ts#L38)

___

### hasMediaPermissions

▸ **hasMediaPermissions**(`name`): `Promise`<`boolean`\>

Check if both microphone and camera permissions are given

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | [`MediaPermission`](modules.md#mediapermission) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/permissions/index.ts:85](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/permissions/index.ts#L85)

___

### hasPermission

▸ **hasPermission**(`name`): `Promise`<`boolean`\>

Check if permission has been given for a media (camera/microphone)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | [`MediaPermission`](modules.md#mediapermission) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/permissions/index.ts:76](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/permissions/index.ts#L76)

___

### muxStreams

▸ **muxStreams**(`videoStream`, ...`audioStream`): `MediaStream`

#### Parameters

| Name | Type |
| :------ | :------ |
| `videoStream` | `MediaStream` |
| `...audioStream` | `MediaStream`[] |

#### Returns

`MediaStream`

New stream with all audio tracks combined in the video stream

#### Defined in

[src/stream/audio.ts:47](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/stream/audio.ts#L47)

___

### onAnyTrackEnded

▸ **onAnyTrackEnded**(`stream`, `callback`, `destroy?`): (...`args`: []) => `void`

Fires when any track of a stream ends

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | `MediaStream` | - |
| `callback` | () => `void` | - |
| `destroy?` | `boolean` | Whether to destroy the stream when any track stops |

#### Returns

`fn`

Function that stops the watcher

▸ (...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] |

##### Returns

`void`

#### Defined in

[src/stream/events.ts:21](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/stream/events.ts#L21)

___

### onDeviceChange

▸ **onDeviceChange**(`listener`, `options?`): () => `void`

Triggers callback when a media device changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`ev`: `Event`) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`fn`

void function to destroy the listener

▸ (): `void`

Destroys listener

##### Returns

`void`

#### Defined in

[src/devices/events.ts:8](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/devices/events.ts#L8)

___

### onTracksEnded

▸ **onTracksEnded**(`stream`, `callback`): `void`

Fires when all tracks of a stream ends

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[src/stream/events.ts:4](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/stream/events.ts#L4)

___

### requestMediaPermissions

▸ **requestMediaPermissions**(): `Promise`<`boolean`\>

Requests all media permissions such as: `camera` `microphone`

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/permissions/index.ts:6](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/permissions/index.ts#L6)

___

### requestPermission

▸ **requestPermission**(`name`): `Promise`<`boolean`\>

Requests a specific media permission

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | [`MediaPermission`](modules.md#mediapermission) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/permissions/index.ts:20](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/permissions/index.ts#L20)

___

### watchDevice

▸ **watchDevice**<`T`\>(`key`, `value`): `EventBus`<``"added"`` \| ``"removed"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `MediaDeviceInfo` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `T` |
| `value` | `MediaDeviceInfo`[`T`] |

#### Returns

`EventBus`<``"added"`` \| ``"removed"``\>

#### Defined in

[src/devices/events.ts:15](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/devices/events.ts#L15)

___

### watchDevicesList

▸ **watchDevicesList**(`onUpdate`, `immediate?`): () => `void`

Triggers callback when a media device changes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onUpdate` | (`data`: `MediaDeviceInfo`[]) => `void` | - |
| `immediate?` | ``true`` | Triggers the `onUpdate` callback on init |

#### Returns

`fn`

void function to destroy the listener

▸ (): `void`

Destroys listener

##### Returns

`void`

#### Defined in

[src/devices/events.ts:42](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/devices/events.ts#L42)

___

### watchPermission

▸ **watchPermission**(`name`, `onChange`, `immediate?`): () => `void`

Watch a media permission

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | [`MediaPermission`](modules.md#mediapermission) | Name of the permission to watch |
| `onChange` | (`status`: `PermissionStatus`) => `void` | Callback function that is triggered when permission is changed |
| `immediate?` | `boolean` | Invoke `onChange` immediately on initialization |

#### Returns

`fn`

Function that destroys the watcher when invoked

▸ (): `void`

Destroy permission watcher

##### Returns

`void`

#### Defined in

[src/permissions/index.ts:35](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/permissions/index.ts#L35)

___

### watchPermissions

▸ **watchPermissions**(`names`, `onChange`, `immediate?`): () => `void`

Watch multiple media permissions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `names` | [`MediaPermission`](modules.md#mediapermission)[] | Names of the permissions to watch |
| `onChange` | (`name`: [`MediaPermission`](modules.md#mediapermission), `status`: `PermissionStatus`) => `void` | Callback function that is triggered when a permission is changed |
| `immediate?` | `boolean` | Invoke `onChange` immediately on initialization for respective permissions |

#### Returns

`fn`

Function that destroys the watcher when invoked

▸ (): `void`

Destroy watcher

##### Returns

`void`

#### Defined in

[src/permissions/index.ts:58](https://github.com/DaPotatoMan/media-utils/blob/db4505f/src/permissions/index.ts#L58)
