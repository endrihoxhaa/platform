import { Class } from '#types/Types'

import {
  extractParameters,
  getParameter,
  getParameters,
  getPayload,
  getProperties,
  getProperty,
  getToken,
  getType,
  setParameter,
  setParameters,
  setPayload,
  setProperties,
  setProperty,
  setToken,
  setType,
} from './ProviderDecorator'

export type ProviderClass<T = any> = Class<T>

export interface Provider {
  token: string
  type: string
  payload: any
  parameters: ProviderClass[]
  properties: [string, ProviderClass][]
}

/**
 * Provider Decorator
 */
export const Provider = (metadata?: Partial<Provider>) => {
  return (target: any) => {
    const metaParameters = metadata?.parameters ?? []
    const parameters = [...extractParameters(target), ...metaParameters]

    setToken(target, metadata?.token)
    setType(target, metadata?.type ?? 'type:provider')
    setPayload(target, metadata?.payload ?? target)
    setParameters(target, parameters)
    setProperties(target, metadata?.properties)
  }
}

/**
 * Provider Read
 */
export const getProvider = (provider: ProviderClass): Provider => {
  return {
    token: getToken(provider),
    type: getType(provider),
    payload: getPayload(provider),
    parameters: getParameters(provider),
    properties: getProperties(provider),
  }
}

/**
 * Property Decorator
 */
export const Property = (providerClass?: ProviderClass) => {
  return (target: any, key: string) => {
    if (providerClass) setProperty(target, key, providerClass)
    else setProperty(target, key, getProperty(target, key))
  }
}

/**
 * Parameter Decorator
 */
export const Parameter = (providerClass?: ProviderClass) => {
  return (target: any, key: string | undefined, index: number) => {
    if (providerClass) setParameter(target, index, providerClass)
    else setParameter(target, index, getParameter(target, index))
  }
}



export * from './ProviderRegistrar'
export * from './ProviderResolver'
export * from './ProviderDecorator'