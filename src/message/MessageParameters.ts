import { MessageObject } from './MessageObject'

export type MessageParameters<HeadersType, PayloadType = any> = Partial<MessageObject<HeadersType, PayloadType>>
