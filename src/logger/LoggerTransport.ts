import { Log } from './Log'

export class LoggerTransport {
  async onLog(log: Log) {
    throw new Error('Method not implemented.')
  }
}
