import { LogLevel } from '#logger/Log'

export const dim = (text: string): string => `\x1b[2m${text}\x1b[0m`
export const blue = (text: string): string => `\x1b[34m${text}\x1b[0m`
export const red = (text: string): string => `\x1b[31m${text}\x1b[0m`
export const green = (text: string): string => `\x1b[32m${text}\x1b[0m`
export const magenta = (text: string): string => `\x1b[35m${text}\x1b[0m`
export const yellow = (text: string): string => `\x1b[33m${text}\x1b[0m`

export const compileDatetime = (date: Date) => {
  const day = `${date.getUTCDate()}`.padStart(2, '0')
  const month = `${date.getUTCMonth() + 1}`.padStart(2, '0')
  const year = date.getUTCFullYear()
  const hours = `${date.getUTCHours()}`.padStart(2, '0')
  const minutes = `${date.getUTCMinutes()}`.padStart(2, '0')
  const secods = `${date.getUTCSeconds()}`.padStart(2, '0')
  const milliseconds = `${date.getUTCMilliseconds()}`.padStart(3, '0')
  return `${day}.${month}.${year}T${hours}:${minutes}:${secods}.${milliseconds}`
}

export const colorLevel = (level: LogLevel) => {
  if (level === 'LOG') return blue(level.padEnd(5, ' '))
  if (level === 'INFO') return blue(level.padEnd(5, ' '))
  if (level === 'WARN') return yellow(level.padEnd(5, ' '))
  if (level === 'ERROR') return red(level.padEnd(5, ' '))
  if (level === 'DEBUG') return green(level.padEnd(5, ' '))
}
