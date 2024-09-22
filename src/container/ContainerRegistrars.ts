import { Container } from './Container'
import { Provider, ProviderClass } from '#provider/Provider'
import { Registrar } from './Registrar'
import { getToken, getType } from '#provider/ProviderDecorator'

export class ContainerRegistrars {
  private _registrars: Map<string, Registrar>

  constructor(private _container: Container) {
    this._registrars = new Map()
  }

  addRegistrar(registrar: Registrar) {
    if (this._registrars.has(registrar.type)) return console.error(`registrar  ${registrar.type} alredy added`)
    this._registrars.set(registrar.type, registrar)
  }

  addRegistrars(registrars: Registrar[]) {
    registrars.forEach((registrar) => this.addRegistrar(registrar))
  }

  register(providerClass: ProviderClass) {
    const type = getType(providerClass)
    const token = getToken(providerClass)

    if (this._container._providers.has(token))
      return console.error(`registrar provider with ${token} alredy registered`, providerClass)

    const registrar = this._registrars.get(type)

    if (!registrar) return console.error(`registrar ${type} not found`, registrar, providerClass)

    registrar.register(providerClass)
  }

  registerManual<T extends Provider>(provider: T) {
    const type = provider.type
    const token = provider.token

    if (this._container._providers.has(token))
      return console.error(`registrar provider with ${token} alredy registered`, provider)

    const registrar = this._registrars.get(type)

    if (!registrar) return console.error(`registrar ${type} not found`, registrar, provider)

    registrar.registerManual(provider)
  }

  registerAll(providerClasses: ProviderClass[]) {
    providerClasses.forEach((provider) => this.register(provider))
  }
}
