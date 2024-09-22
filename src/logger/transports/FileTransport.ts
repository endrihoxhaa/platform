import { Log } from '#logger/Log'
import { LoggerTransport } from '#logger/LoggerTransport'

// Define the FileTransport class implementing LoggerTransport interface
export class FileTransport implements LoggerTransport {
  file: any
  writ: any

  constructor(private filename: string) {
    this.file = Bun.file(this.filename) // Create a file handle
    this.writ = this.file.writer() // Get a writer
  }

  // Handles logging by appending log data to the specified file
  async onLog(log: Log) {
    const json = JSON.stringify(log, null, 2) // Convert log object to JSON
    try {
      // Use Bun's built-in file handling directly

      // Write the log to the file and close the writer afterwards
      this.writ.write(json + ',\n')
    } catch (error) {
      console.error(`Failed to write log to file ${this.filename}:`, error)
    }
  }
}
