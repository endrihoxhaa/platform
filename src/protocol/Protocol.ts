import { Message } from '#message/Message'

export class Protocol {
  static encode(message: Message): string {
    let messageObject = message.toObject()

    if(messageObject.source === '|') {
      delete (messageObject as any).source
    }


    if(messageObject.target === '|') {
      delete (messageObject as any).target
    }

    if(Object.entries(messageObject.headers).length === 0) {
      delete (messageObject as any).headers
    }

    return JSON.stringify(messageObject)
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
