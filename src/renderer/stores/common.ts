import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Menu } from '@/types/menu'

export const useCommonStore = defineStore('common', () => {
  const isMenuCollapse = ref<boolean>(false)
  const activeMenuIndex = ref<string>('1-1')
  const activeMenuText = ref<string>('查看公司信息')

  const compMenuCollapse = computed(() => isMenuCollapse.value)
  const compActiveMenuIndex = computed(() => activeMenuIndex.value)
  const compActiveMenuText = computed(() => activeMenuText.value)

  function setMenuState(isCollapse: boolean) {
    isMenuCollapse.value = isCollapse
  }
  function setActiveMenu(activeMenu: Menu) {
    activeMenuIndex.value = activeMenu.index
    activeMenuText.value = activeMenu.text
  }

  return {
    compMenuCollapse,
    compActiveMenuIndex,
    compActiveMenuText,
    setMenuState,
    setActiveMenu
  }
})
