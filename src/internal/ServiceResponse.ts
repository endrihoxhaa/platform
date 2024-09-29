export class ServiceResponse {
  status: boolean
  isSuccess: boolean
  isError:  boolean
  code: string
  data: any

  constructor(data: any, status?: boolean, code?: string) {
    this.status = status ?? true
    this.isSuccess = status ?? true
    this.isError = !status
    this.code = code ?? ''
    this.data = data
  }
}

export const response = <T>(data: T, status?: boolean, code?: string) => new ServiceResponse(data, status, code)

