import { Message, MessageType } from '#message/Message'

type RequestHeaders = {}

export class RequestMessage<RequestPayload = any> extends Message<RequestHeaders, RequestPayload> {
  constructor(target: string, payload: RequestPayload) {
    super({ type: MessageType.REQUEST, target: target, headers: {}, payload: payload })
  }
}
