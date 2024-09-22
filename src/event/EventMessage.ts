import { Message, MessageType } from '#message/Message'

type EventHeaders = {
  name: string
}

export class EventMessage<EventPayload = any> extends Message<EventHeaders, EventPayload> {
  constructor(name: string, payload: EventPayload) {
    super({ type: MessageType.EVENT, headers: { name }, payload })
  }
}
