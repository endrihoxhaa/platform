import { Container } from '#container/Container'
import { Registrar } from '#container/Registrar'
import { getProvider, Provider, ProviderClass } from '#provider/Provider'

export class ProviderRegistrar implements Registrar {
  type: string = 'type:provider'

  constructor(private _container: Container) {}

  register(providerClass: ProviderClass) {
    const provider = getProvider(providerClass)

    this._container._providers.set(provider.token, provider)
  }

  registerManual(provider: Provider): void {
    this._container._providers.set(provider.token, provider)
  }
}
