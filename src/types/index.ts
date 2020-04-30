export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface SwAxiosRequestConfig {
  url: string
  method?: Method
  headers?: any
  data?: any
  params?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface SwAxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: SwAxiosRequestConfig
  request: any
}

export interface SwAxiosError extends Error {
  config: SwAxiosRequestConfig
  code?: string
  request?: any
  response?: SwAxiosResponse
  isAxiosError: boolean
}

export interface SwAxiosPromise extends Promise<SwAxiosResponse> {}
