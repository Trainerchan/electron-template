import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserAdmin } from '@/types/user'
import { Session } from '@/utils/storage'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<UserAdmin>({
    id: '',
    user_name: '',
    image: '',
    createTime: ''
  })

  const compUserInfo = computed(() => userInfo.value)

  function setUserInfo(user: UserAdmin) {
    userInfo.value = user
    Session.set('user', user)
  }

  if (Session.get('user')) {
    userInfo.value = Session.get('user')
  }

  return {
    compUserInfo,
    setUserInfo
  }
})
