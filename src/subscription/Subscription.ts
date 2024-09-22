import { Network } from '#network/Network'

export class Subscription {
  created: Date

  constructor(public event: string, private network: Network) {
    this.created = new Date()
  }

  async unsubscribe() {
    return this.network.unsubscribe(this.event)
  }
}
