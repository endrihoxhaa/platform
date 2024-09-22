import { Message, MessageType } from './Message'

/**
 * Message Events
 */
export type MessageEvents = {
  [key in MessageType]: Message
}
