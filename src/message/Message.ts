import { createID, ID } from '#id/ID'
import { timeElapsedFrom } from '#time/Time'
import { MessageType } from './MessageType'
import { MessageObject } from './MessageObject'
import { MessageParameters } from './MessageParameters'

export class Message<HeadersType = any, PayloadType = any> {
  private _id: ID
  private _ref: ID
  private _ttl: number
  private _type: MessageType
  private _source: string
  private _target: string
  private _headers: HeadersType
  private _payload: PayloadType
  private _timestamp: number

  constructor({
    id,
    ref,
    ttl,
    type,
    source,
    target,
    headers,
    payload,
    timestamp,
  }: MessageParameters<HeadersType, PayloadType> = {}) {
    this._id = id ?? createID()
    this._ref = ref ?? ''
    this._ttl = ttl ?? 10000
    this._type = type ?? MessageType.ERROR
    this._source = source ?? ''
    this._target = target ?? ''
    this._headers = headers ?? Object.create({})
    this._payload = payload ?? Object.create({})
    this._timestamp = timestamp ?? new Date().getTime()
  }

  get id() {
    return this._id
  }

  get ref() {
    return this._ref
  }

  get ttl() {
    return this._ttl
  }

  get type() {
    return this._type
  }

  get source() {
    return this._source
  }

  get target() {
    return this._target
  }

  get headers(): HeadersType {
    return this._headers
  }

  get payload(): PayloadType {
    return this._payload
  }

  get timestamp() {
    return this._timestamp
  }

  /*****************************************************************************************/
  public setID(id: ID) {
    this._id = id
  }

  public setRef(id: Message['id']) {
    this._ref = id
  }

  public setTTL(ttl: Message['ttl']) {
    this._ttl = ttl
  }

  public setType(type: Message['type']) {
    this._type = type
  }

  public setSource(source: Message['source']) {
    this._source = source
  }

  public setTarget(target: Message['target']) {
    this._target = target
  }

  public setHeaders(headers: Message['headers']) {
    this._headers = headers
  }

  public setPayload(payload: Message['payload']) {
    this._payload = payload
  }

  public setTimeStamp(timestamp: Message['timestamp']) {
    this._timestamp = timestamp
  }

  /*****************************************************************************************/
  public setHeader<Key extends keyof HeadersType>(key: Key, value: HeadersType[Key]) {
    return (this._headers[key] = value)
  }

  public getHeader(key: keyof HeadersType) {
    return this._headers[key]
  }

  public hasHeader(key: keyof HeadersType) {
    return this._headers && key in (this._headers as object)
  }

  public delHeader(key: keyof HeadersType) {
    if (this.hasHeader(key)) return delete this._headers[key]
    return false
  }

  /*****************************************************************************************/
  public setPayloadKey<Key extends keyof PayloadType>(key: Key, value: PayloadType[Key]) {
    return (this._payload[key] = value)
  }

  public getPayloadKey<Key extends keyof PayloadType>(key: Key): PayloadType[Key] {
    return this._payload[key]
  }

  public hasPayloadKey<Key extends keyof PayloadType>(key: Key) {
    return this._payload && key in (this._payload as object)
  }

  public delPayloadKey<Key extends keyof PayloadType>(key: Key) {
    if (this.hasPayloadKey(key)) return delete this._payload[key]
    return false
  }

  /*****************************************************************************************/

  public get isValid() {
    return timeElapsedFrom(this._timestamp) < this._ttl
  }

  public get isInvalid() {
    return timeElapsedFrom(this._timestamp) > this._ttl
  }

  /*****************************************************************************************/

  public is(type: MessageType) {
    return this._type === MessageType[type]
  }

  public get isRequest() {
    return this._type === MessageType.REQUEST
  }

  public get isResponse() {
    return this._type === MessageType.RESPONSE
  }

  public get isError() {
    return this._type === MessageType.ERROR
  }

  public get isEvent() {
    return this._type === MessageType.EVENT
  }

  public get isSubscribe() {
    return this._type === MessageType.SUBSCRIBE
  }

  public get isUnSubscribe() {
    return this._type === MessageType.UNSUBSCRIBE
  }

  /*****************************************************************************************/

  public get hasReference() {
    return !this._ref
  }

  /*****************************************************************************************/
  public toObject(): MessageObject {
    return {
      id: this._id,
      ref: this._ref,
      ttl: this._ttl,
      type: this._type,
      source: this._source,
      target: this._target,
      headers: this._headers,
      payload: this._payload,
      timestamp: this._timestamp,
    }
  }
}

export * from './MessageEvents'
export * from './MessageObject'
export * from './MessageType'
