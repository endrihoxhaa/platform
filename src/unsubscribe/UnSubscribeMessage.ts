import { Message, MessageType } from '#message/Message'

type UnSubscribeHeaders = {
  name: string
}
type UnSubscribePayload = {}

export class UnSubscribeMessage extends Message<UnSubscribeHeaders, UnSubscribePayload> {
  constructor(name: string) {
    super({ type: MessageType.UNSUBSCRIBE, payload: { name } })
  }
}

