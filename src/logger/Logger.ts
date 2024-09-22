import { Log } from './Log'
import { LoggerTransport } from './LoggerTransport'

export class Logger {
  public namespace: string

  constructor(namespace?: string) {
    this.namespace = namespace ?? ''
  }

  public setNamespace(namespace: string) {
    this.namespace = namespace
  }

  public log(message: any, descriptor?: any) {
    const log = new Log({ message, namespace: this.namespace, level: 'LOG', descriptor })
    Logger._log(log)
  }

  public info(message: any, descriptor?: any) {
    const log = new Log({ message, namespace: this.namespace, level: 'INFO', descriptor })
    Logger._log(log)
  }

  public warn(message: any, descriptor?: any) {
    const log = new Log({ message, namespace: this.namespace, level: 'WARN', descriptor })
    Logger._log(log)
  }

  public error(message: any, descriptor?: any) {
    const log = new Log({ message, namespace: this.namespace, level: 'ERROR', descriptor })
    Logger._log(log)
  }

  public debug(message: any, descriptor?: any) {
    const log = new Log({ message, namespace: this.namespace, level: 'DEBUG', descriptor })
    Logger._log(log)
  }

  /** Global Logger Instance */
  private static namespace: string = ''
  private static _transports: LoggerTransport[] = []

  static setNamespace(namespace: string) {
    Logger.namespace = namespace
  }

  static addTransport(transport: LoggerTransport) {
    this._transports.push(transport)
  }

  private static   _log(log: Log) {
    this._transports.forEach(async (transport) => await transport.onLog(log))
  }

  static log(message: any, descriptor?: any) {
    const log = new Log({ message, namespace: this.namespace, level: 'LOG', descriptor })
    Logger._log(log)
  }

  static info(message: any, descriptor?: any) {
    const log = new Log({ message, namespace: this.namespace, level: 'INFO', descriptor })
    Logger._log(log)
  }

  static warn(message: any, descriptor?: any) {
    const log = new Log({ message, namespace: this.namespace, level: 'WARN', descriptor })
    Logger._log(log)
  }

  static error(message: any, descriptor?: any) {
    const log = new Log({ message, namespace: this.namespace, level: 'ERROR', descriptor })
    Logger._log(log)
  }

  static debug(message: any, descriptor?: any) {
    const log = new Log({ message, namespace: this.namespace, level: 'DEBUG', descriptor })
    Logger._log(log)
  }
}
