export class EventBus<Type extends string> {
  private bus = new EventTarget()

  on(type: Type, listener: VoidFunction) {
    this.bus.addEventListener(type, listener)
  }

  once(type: Type, listener: VoidFunction) {
    this.bus.addEventListener(type, listener, { once: true })
  }

  off(type: Type, listener: VoidFunction) {
    this.bus.removeEventListener(type, listener)
  }

  emit(type: Type, data?: any) {
    const evt = new CustomEvent(type, { detail: data })
    this.bus.dispatchEvent(evt)
  }
}
