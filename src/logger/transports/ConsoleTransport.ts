import { Log } from '#logger/Log'
import { LoggerTransport } from '#logger/LoggerTransport'
import { colorLevel, compileDatetime, dim, magenta } from './ConsoleTransportUtils'

export class ConsoleTransport implements LoggerTransport {
  async onLog({ id, namespace, level, message, descriptor, datetime }: Log) {
    const datetimeColored = compileDatetime(datetime)
    const levelColored = colorLevel(level)
    const namespaceColored = magenta(namespace)

    if (descriptor !== undefined && descriptor) {
      console.log(dim(datetimeColored), namespaceColored, levelColored, dim('=>'), message, descriptor)
    } else {
      console.log(dim(datetimeColored), namespaceColored,dim('|'), levelColored, dim('=>'), message)
    }
  }
}
