import { SwAxiosRequestConfig, SwAxiosResponse } from '../types'

export class SwAxiosError extends Error {
  isAxiosError: boolean
  config: SwAxiosRequestConfig
  code?: string | null
  request?: any
  response?: SwAxiosResponse

  constructor(
    message: string,
    config: SwAxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: SwAxiosResponse
  ) {
    super(message)

    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true

    Object.setPrototypeOf(this, SwAxiosError.prototype)
  }
}

export function createError(
  message: string,
  config: SwAxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: SwAxiosResponse
): SwAxiosError {
  const error = new SwAxiosError(message, config, code, request, response)

  return error
}
