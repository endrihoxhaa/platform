import { ProviderClass } from '#provider/Provider'
import { getToken } from '#provider/ProviderDecorator'
import { Container } from './Container'

export class InstanceManager {
  constructor(private _container: Container) {}

  getInstance<T>(providerClass: ProviderClass<T>): T {
    const token = getToken(providerClass)
    return this._container._instances.get(token)
  }

  getInstanceByToken<T = any>(providerToken: string): T {
    return this._container._instances.get(providerToken)
  }

  getInstancesByType(type: string): any[] {
    const typeInstances: any[] = []

    for (const [instanceToken, instance] of this._container._instances) {
      const provider = this._container._providers.get(instanceToken)
      if (!provider) continue
      if (provider.type === type) typeInstances.push(instance)
    }

    return typeInstances
  }


  run(methodName: string, instanceType: string) {
    let instances: any[] = []

    if (instanceType === '*') instances = [...this._container._instances.values()]
    else instances = this.getInstancesByType(instanceType)

    for (const instance of instances) instance[methodName] && instance[methodName]()
  }

  async runAsync(methodName: string, instanceType: string) {
    let instances: any[] = []

    if (instanceType === '*') instances = [...this._container._instances.values()]
    else instances = this.getInstancesByType(instanceType)

    for (const instance of instances) instance[methodName] && (await instance[methodName]())
  }
}
