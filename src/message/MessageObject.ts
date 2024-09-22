import { MessageType } from './MessageType'

export type MessageProto = string

export type MessageObject<HeadersType = any, PayloadType = any> = {
  id: string
  ref: string
  ttl: number
  type: MessageType
  source: string
  target: string
  headers: HeadersType
  payload: PayloadType
  timestamp: number
}
