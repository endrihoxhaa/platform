/**
 * Message Types
 */
export enum MessageType {
  REQUEST = 'REQUEST',
  RESPONSE = 'RESPONSE',

  SUBSCRIBE = 'SUBSCRIBE',
  UNSUBSCRIBE = 'UNSUBSCRIBE',

  EVENT = 'EVENT',

  ERROR = 'ERROR',

  HEARTBEAT = 'HEARTBEAT',
}
