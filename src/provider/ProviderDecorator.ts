import { Provider, ProviderClass } from './Provider'

const PROVIDER_KEY_TOKEN = 'PROVIDER:TOKEN'
const PROVIDER_KEY_TYPE = 'PROVIDER:TYPE'
const PROVIDER_KEY_PAYLOAD = 'PROVIDER:PAYLOAD'
const PROVIDER_KEY_PARAMETERS = 'PROVIDER:PARAMETERS'
const PROVIDER_KEY_PROPERTIES = 'PROVIDER:PROPERTIES'

/**
 * Set Metadata
 */
export const set = (target: any, meta: string, value: any) => Reflect.defineMetadata(meta, value, target)
/**
 * Get Metadata
 */
export const get = (target: any, meta: string) => Reflect.getMetadata(meta, target)

export const setType = (target: any, type: Provider['type']) => set(target, PROVIDER_KEY_TYPE, type)

export const getType = (target: any): Provider['type'] => get(target, PROVIDER_KEY_TYPE)

export const setPayload = (target: any, payload?: Provider['payload']) => set(target, PROVIDER_KEY_PAYLOAD, payload ?? target)

export const getPayload = (target: any): Provider['payload'] => get(target, PROVIDER_KEY_PAYLOAD)

/**
 * Get Token
 */
export const getToken = (target: ProviderClass): string => get(target, PROVIDER_KEY_TOKEN) ?? target['name']
/**
 * Set Token
 */
export const setToken = (target: any, token?: Provider['token']) => set(target, PROVIDER_KEY_TOKEN, token ?? target['name'])

/**
 * Get Parameters
 */
export const extractParameters = (target: any): Provider['parameters'] => {
  const parameters = (Reflect.getMetadata('design:paramtypes', target) as ProviderClass[]) ?? []
  return parameters
}

/**
 * Get Parameters
 */
export const getParameters = (target: any): Provider['parameters'] => get(target, PROVIDER_KEY_PARAMETERS) ?? []
/**
 * Set Parameters
 */
export const setParameters = (target: any, parameters: Provider['parameters']) => set(target, PROVIDER_KEY_PARAMETERS, parameters)

/**
 * Set Parameter
 */
export const setParameter = (target: any, index: number, providerClass: ProviderClass) => {
  const parameters = getParameters(target)
  parameters[index] = providerClass
  setParameters(target, parameters)
}
/**
 * Get Parameter
 */
export const getParameter = (target: any, index: number): ProviderClass => getParameters(target)[index]

/**
 * Set Property
 */
export const setProperty = (target: any, key: string, providerClass: ProviderClass) => {
  const properties = getProperties(target)
  properties.push([key, providerClass])
  setProperties(target, properties)
}
/**
 * Get Property
 */
export const getProperty = (target: any, key: string): ProviderClass =>
  Reflect.getMetadata('design:type', target['prototype'], key) as ProviderClass

/**
 * Get Properties
 */
export const getProperties = (target: any): Provider['properties'] => get(target, PROVIDER_KEY_PROPERTIES) ?? []

/**
 * Set Properties
 */
export const setProperties = (target: any, properties: Provider['properties'] = []) => {
  const currentProps = getProperties(target)

  set(target, PROVIDER_KEY_PROPERTIES, [ ...currentProps, ...properties ])
}
