import { EventMessage } from '#event/EventMessage'
import { RequestMessage } from '#request/RequestMessage'
import { ResponseMessage } from '#response/ResponseMessage'
import { EventListener } from '#listener/EventListener'
import { SubscribeMessage } from '#subscribe/SubscribeMessage'
import { Subscription } from '#subscription/Subscription'

export class Network {
  constructor() {}

  createRequest<RequestPayload>(target: string, payload: RequestPayload) {
    return new RequestMessage(target, payload)
  }

  createResponse<ResponsePayload>(target: string, payload: ResponsePayload) {
    return new RequestMessage(target, payload)
  }

  createEvent<EventPayload>(target: string, payload: EventPayload) {
    return new EventMessage(target, payload)
  }

  createSubscribe<EventPayload>(event: string, payload: EventPayload) {
    return new SubscribeMessage(event)
  }

  async sendRequest(message: RequestMessage): Promise<ResponseMessage> {
    throw new Error('Not implemented')
  }

  async publishEvent(message: EventMessage): Promise<boolean> {
    throw new Error('Not implemented')
  }

  async subscribe<EventPayload = any>(event: string, listener: EventListener<EventPayload>): Promise<Subscription> {
    throw new Error('Not implemented')
  }

  async unsubscribe(event: string): Promise<ResponseMessage> {
    throw new Error('Not implemented')
  }
}


