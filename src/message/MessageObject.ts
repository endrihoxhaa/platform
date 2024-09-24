import { MessageType } from './MessageType'

//                     server_id | route_id
export type URI = `${string}|${string}`

export type MessageProto = string

export type MessageObject<HeadersType = any, PayloadType = any> = {
  id: string
  ref: string
  ttl: number
  type: MessageType
  source: URI
  target: URI
  headers: HeadersType
  payload: PayloadType
  timestamp: number
}
