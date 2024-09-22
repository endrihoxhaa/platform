import { ContainerRegistrars } from './ContainerRegistrars'
import { ContainerResolvers } from './ContainerResolvers'
import { InstanceCreator } from './InstanceCreator'
import { Provider, ProviderClass } from '#provider/Provider'
import { Registrar } from './Registrar'
import { Resolver } from './Resolver'
import { ProviderManager } from './ProviderManager'
import { InstanceManager } from './InstanceManager'
import { Class } from '#types/Types'

export class Container {
  _providers: Map<string, any>
  _instances: Map<string, any>

  _registrars: ContainerRegistrars
  _resolvers: ContainerResolvers

  instanceCreator: InstanceCreator

  providerManager: ProviderManager
  instanceManager: InstanceManager

  constructor() {
    this._providers = new Map()
    this._instances = new Map()

    this.instanceCreator = new InstanceCreator(this)

    this.providerManager = new ProviderManager(this)
    this.instanceManager = new InstanceManager(this)

    this._registrars = new ContainerRegistrars(this)
    this._resolvers = new ContainerResolvers(this)
  }

  addRegistrar(registrar: Class<Registrar>) {
    this._registrars.addRegistrar(new registrar(this))
  }

  addRegistrars(registrars: Class<Registrar>[]) {
    this._registrars.addRegistrars(registrars.map((registrar) => new registrar(this)))
  }

  addResolver(resolver: Class<Resolver>) {
    this._resolvers.addResolver(new resolver(this))
  }

  addResolvers(resolvers: Class<Resolver>[]) {
    this._resolvers.addResolvers(resolvers.map((resolver) => new resolver(this)))
  }

  register(providerClass: ProviderClass) {
    this._registrars.register(providerClass)
  }

  registerManual<T>(provider:Provider & T){
    this._registrars.registerManual(provider)
  }

  registerAll(providerClasses: ProviderClass[]) {
    this._registrars.registerAll(providerClasses)
  }

  resolveSync = <T>(providerClass: ProviderClass<T>): T => {
    return this._resolvers.resolveSync(providerClass)
  }

  resolveSyncAll = (providerClasses: ProviderClass[]) => {
    return this._resolvers.resolveSyncAll(providerClasses)
  }
}


export * from './Registrar'
export * from './Resolver'