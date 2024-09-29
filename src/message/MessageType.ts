/**
 * Message Types: Representing various communication flows within a messaging system.
 */
export enum MessageType {
  // Request-response cycle messages
  REQUEST = 'REQUEST',      // Client-initiated request to the server.
  RESPONSE = 'RESPONSE',    // Server's response to a client request.

  // Subscription messages (for event-driven or WebSocket connections)
  SUBSCRIBE = 'SUBSCRIBE',  // Client subscribes to a specific event or data stream.
  UNSUBSCRIBE = 'UNSUBSCRIBE', // Client unsubscribes from a specific event or data stream.

  // Event-driven messages
  EVENT = 'EVENT',          // Server-sent events, such as notifications or data updates.

  // Error messages
  ERROR = 'ERROR',          // Error response to signify an issue with the request or execution.
}