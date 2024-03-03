import { showMessage } from '@/core/messageApi'
import type { ErrorResponse } from '@/types/http'
import axios, { AxiosError } from 'axios'
import { apiMap, type ApiType } from '@/config/api.config'
import { Session } from '@/utils/storage'
import { HEADER_TOKEN_KEY, TOKEN_KEY } from '@/config/base.config'

export const http = axios.create({
  baseURL: 'https://www.ztt277.com/api'
})

let reqMap: ApiType

http.interceptors.request.use(
  function (config) {
    // console.log('请求拦截->', config)
    const { url, method } = config
    reqMap = Object.values(apiMap).filter((v: ApiType) => {
      return v.url === url && v.method.toLowerCase() === method?.toLowerCase()
    })[0]
    if (reqMap.withToken) {
      const token = Session.get(TOKEN_KEY)
      config.headers[HEADER_TOKEN_KEY] = 'Bearer ' + token
    }
    return config
  },
  function (err) {
    return Promise.reject(err)
  }
)

http.interceptors.response.use(
  function (config) {
    // console.log('响应拦截->', config)
    if (reqMap.saveToken) {
      Session.set(TOKEN_KEY, config.data.data.token)
    }
    return config.data
  },
  function (err: AxiosError) {
    const errRes = err.response?.data as ErrorResponse
    if (errRes.msg) {
      showMessage.error('Error ' + errRes.code.toString() + '. ' + errRes.msg)
    } else {
      showMessage.error(err.message)
    }
    return Promise.reject(err)
  }
)
