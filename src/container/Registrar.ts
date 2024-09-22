import { Provider, ProviderClass } from '#provider/Provider'
import { Container } from './Container'

export abstract class Registrar {
  abstract type: string

  constructor(container: Container) {}

  abstract register(provider: ProviderClass): void
  
  abstract registerManual(provider: Provider): void
}
