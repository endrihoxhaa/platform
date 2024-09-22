import { ID } from '#id/ID'
import { Message, MessageType } from '#message/Message'

type ResponseHeaders = {}

export class ResponseMessage<ResponsePayload = any> extends Message<ResponseHeaders, ResponsePayload> {
  constructor(requestId: ID, payload: ResponsePayload) {
    super({ type: MessageType.RESPONSE, ref: requestId, headers: {}, payload })
  }
}
