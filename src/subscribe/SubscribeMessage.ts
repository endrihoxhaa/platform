import { Message, MessageType } from '#message/Message'

type SubscribeHeaders = {
  name: string
}
type SubscribePayload = {}

export class SubscribeMessage extends Message<SubscribeHeaders, SubscribePayload> {
  constructor(name: string) {
    super({ type: MessageType.SUBSCRIBE, headers: { name } })
  }
}
