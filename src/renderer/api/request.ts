import { type RequestType, apiMap } from '@/config/api.config'
import { http } from './http'
import { ElLoading } from 'element-plus'
import type { HttpResponse } from '@/types/http'

let loadingNum: number = 0

export function myRequest<T>({ reqType, data = {}, params = {} }: RequestType) {
  if (!(reqType in apiMap)) {
    return Promise.reject('无效的请求')
  }
  loadingNum++
  const loadingEle = ElLoading.service({ fullscreen: true })
  return new Promise<HttpResponse<T>>((resolve, reject) => {
    http({
      url: apiMap[reqType].url,
      method: apiMap[reqType].method,
      headers: apiMap[reqType].headers,
      data: data,
      params: params,
      timeout: apiMap[reqType].timeout
    })
      .then((res: any) => resolve(res as HttpResponse<T>))
      .catch((err) => reject(err))
      .finally(() => {
        loadingNum--
        if (loadingNum === 0) {
          loadingEle.close()
        }
      })
  })
}
