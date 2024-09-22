import { EventListener } from '#listener/EventListener'

export class EventChannel<Event = any> {
  private _listeners: EventListener<Event>[]
  private _onceListeners: EventListener<Event>[]

  constructor() {
    this._listeners = []
    this._onceListeners = []
  }

  public fire = (event: Event) => {
    this._fire(event)
    this._fireOnces(event)
  }

  public on = (listener: EventListener<Event>) => {
    this._listeners.push(listener)
    return this._createRemoveListener(listener)
  }

  public once = (listener: EventListener<Event>) => {
    this._onceListeners.push(listener)
  }

  public of = (listener: EventListener<Event>) => {
    this._listeners = this._removeListener(this._listeners, listener)
    this._onceListeners = this._removeListener(this._onceListeners, listener)
  }

  public clear = () => {
    this._listeners = []
    this._onceListeners = []
  }

  private _fire = (event: Event) => {
    if (this._listeners.length <= 0) return
    this._listeners.forEach((listener) => listener(event, this._createRemoveListener(listener)))
  }

  private _fireOnces = (event: Event) => {
    if (this._onceListeners.length <= 0) return
    this._onceListeners.forEach((listener) => listener(event, this._createRemoveListener(listener)))
    this._onceListeners = []
  }

  private _removeListener = (list: EventListener<Event>[], listener: EventListener<Event>) => {
    if (list.length === 0) return list
    list = list.filter((current) => listener !== current)
    return list
  }

  private _createRemoveListener = (listener: EventListener<Event>) => () => this.of(listener)
}
