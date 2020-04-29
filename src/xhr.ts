import { SwAxiosRequestConfig } from './types'

export default function xhr(config: SwAxiosRequestConfig) {
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  request.send(data)
}
