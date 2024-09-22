import { Container } from '#container/Container'
import { Resolver } from '#container/Resolver'
import { getProvider, ProviderClass } from '#provider/Provider'

export class ProviderResolver implements Resolver {
  type: string = 'type:provider'

  constructor(private _container: Container) {}

  resolveSync = <T>(providerClass: ProviderClass<T>): T => {
    const provider = getProvider(providerClass)

    if (this._container._instances.has(provider.token)) return this._container._instances.get(provider.token)!

    const newInstance = this._container.instanceCreator.createInstance(provider)

    // cache
    this._container._instances.set(provider.token, newInstance)

    return newInstance
  }
}
