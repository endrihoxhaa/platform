import { EventChannel } from '#channel/EventChannel'
import { EventListener } from '#listener/EventListener'

export type EventChannelsStructure = Record<string, any>

export class EventEmitter<EventChannels extends EventChannelsStructure = any> {
  private _eventChannels: Map<string, EventChannel>

  constructor() {
    this._eventChannels = new Map()
  }

  public fire<Channel extends keyof EventChannels>(channel: Channel, event?: EventChannels[Channel]): void
  public fire<Channel extends keyof EventChannels>(channel: Channel, event: EventChannels[Channel]) {
    const eventChannel = this._getEventChannel(channel)
    eventChannel.fire(event)
  }

  public on = <Channel extends keyof EventChannels>(
    channel: Channel,
    eventListener: EventListener<EventChannels[Channel]>,
  ) => {
    const eventChannel = this._getEventChannel(channel)
    return eventChannel.on(eventListener)
  }

  public once = <Channel extends keyof EventChannels>(
    channel: Channel,
    eventListener: EventListener<EventChannels[Channel]>,
  ) => {
    const eventChannel = this._getEventChannel(channel)
    eventChannel.once(eventListener)
  }

  public of = <Channel extends keyof EventChannels>(
    channel: Channel,
    eventListener: EventListener<EventChannels[Channel]>,
  ) => {
    const eventChannel = this._getEventChannel(channel)
    eventChannel.of(eventListener)
  }

  public clearChannel = (channel: string) => {
    this._eventChannels.delete(channel)
  }

  public clear = () => {
    this._eventChannels.forEach((eventChannel) => eventChannel.clear())
  }

  private _getEventChannel = <Channel extends keyof EventChannels>(
    channel: Channel,
  ): EventChannel<EventChannels[Channel]> => {
    const eventChannel = this._eventChannels.get(channel as string)
    if (eventChannel) return eventChannel

    const newEventChannel = new EventChannel<EventChannels[Channel]>()
    this._eventChannels.set(channel as string, newEventChannel)
    return newEventChannel
  }
}
