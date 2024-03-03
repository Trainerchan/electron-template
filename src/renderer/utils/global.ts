import { getCurrentInstance, type ComponentInternalInstance } from 'vue'
import _ from 'lodash'
import mitt from 'mitt'

export const lodash = _
export const mittBus = mitt()

export function useGlobalProperties() {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance
  return appContext.config.globalProperties
}
