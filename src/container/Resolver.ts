import { ProviderClass } from '#provider/Provider'

export abstract class Resolver {
  abstract type: string

  abstract resolveSync<T>(providerClass: ProviderClass<T>): T
}
