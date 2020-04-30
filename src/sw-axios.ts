import { SwAxiosRequestConfig, SwAxiosPromise, SwAxiosResponse } from './types'
import xhr from './xhr'
import { bulidURL } from './helper/url'
import { transformRequest, transformResponse } from './helper/data'
import { processHeaders } from './helper/headers'

function swaxios(config: SwAxiosRequestConfig): SwAxiosPromise {
  //todo
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: SwAxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformUrl(config: SwAxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url, params)
}

//格式化请求数据
function transformRequestData(config: SwAxiosRequestConfig): any {
  return transformRequest(config.data)
}

//格式化Header
function transformHeaders(config: SwAxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

//格式化响应数据
function transformResponseData(res: SwAxiosResponse): SwAxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

export default swaxios
