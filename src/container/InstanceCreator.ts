import { Provider } from '#provider/Provider'
import { Container } from './Container'

export class InstanceCreator {
  constructor(private _container: Container) {}

  createInstance(provider: Provider) {
    const { parameters, properties, payload: Provider } = provider

    const resolvedParameters = this._container.resolveSyncAll(parameters)
    const resolvedProperties = properties.map(([key, provider]) => [key, this._container.resolveSync(provider)])

    const newInstance = new Provider(...resolvedParameters)

    resolvedProperties.forEach(([key, property]) => (newInstance[key] = property))

    return newInstance
  }
}
