import { Message } from '#message/Message'

export class Protocol {
  static encode(message: Message): string {
    return JSON.stringify(message.toObject())
  }

  static decode(message: string): Message {
    try {
      const parsed = JSON.parse(message)
      return new Message(parsed)
    } catch (error) {
      throw new Error('Failed to decode message: ' + error)
    }
  }
}
