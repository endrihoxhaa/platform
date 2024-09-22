import { getToken, getType } from '#provider/ProviderDecorator'
import { ProviderClass } from '#provider/Provider'
import { Container } from './Container'
import { Resolver } from './Resolver'

export class ContainerResolvers {
  _resolvers: Map<string, Resolver>

  constructor(private _container: Container) {
    this._resolvers = new Map()
  }

  addResolver(resolver: Resolver) {
    if (this._resolvers.has(resolver.type)) return console.error(`resolver  ${resolver.type} alredy added`)
    this._resolvers.set(resolver.type, resolver)
  }

  addResolvers(resolvers: Resolver[]) {
    resolvers.forEach((resolver) => this.addResolver(resolver))
  }

  resolveSync = <T>(providerClass: ProviderClass<T>): T => {
    const type = getType(providerClass)
    const token = getToken(providerClass)

    const provider = this._container._providers.get(token)
    if (!provider) return console.error(`resolver provider with ${token} not found`) as T

    const resolver = this._resolvers.get(type ?? provider.type)
    if (!resolver) return console.error(`resolver with ${type} not found`) as T

    return resolver.resolveSync(providerClass)
  }

  resolveSyncAll = (providerClasses: ProviderClass[]) => {
    return providerClasses.map(this.resolveSync)
  }
}
