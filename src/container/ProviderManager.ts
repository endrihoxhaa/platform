import { ProviderClass } from '#provider/Provider'
import { Provider } from '#provider/Provider'
import { getToken } from '#provider/ProviderDecorator'
import { Container } from './Container'

export class ProviderManager {
  constructor(private _container: Container) {}

  getProvider(providerClass: ProviderClass): Provider {
    const token = getToken(providerClass)
    return this._container._providers.get(token)
  }

  getProvidersByType(type: string): Provider[] {
    const typeProviders: Provider[] = []

    for (const provider of this._container._providers.values()) provider.type === type && typeProviders.push(provider)

    return typeProviders
  }
}
