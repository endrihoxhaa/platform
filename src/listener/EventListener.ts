export type EventListener<Event = any> = (event: Event, removeListener: Function) => void

export type EventListeners<Event = any> = EventListener<Event>[]
