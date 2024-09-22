import { createID } from '#id/ID'
import { now } from '#time/Time'

export type LogLevel = 'LOG' | 'INFO' | 'WARN' | 'ERROR' | 'DEBUG'

export type LogObject = {
  readonly id: string
  readonly level: LogLevel
  readonly namespace: string
  readonly message: string
  readonly descriptor: object
  readonly datetime: Date
  readonly timestamp: number
}

export class Log {
  public readonly id: string
  public readonly level: LogLevel
  public readonly message: string
  public readonly namespace: string
  public readonly descriptor?: object
  public readonly datetime: Date
  public readonly timestamp: number

  constructor({ id, level, namespace, message, descriptor, datetime, timestamp }: Partial<LogObject>) {
    this.id = id ?? createID(5)
    this.level = level ?? 'LOG'
    this.namespace = namespace ?? ''
    this.message = message ?? ''
    this.descriptor = descriptor 
    this.datetime = datetime ?? new Date()
    this.timestamp = timestamp ?? now()
  }
}
