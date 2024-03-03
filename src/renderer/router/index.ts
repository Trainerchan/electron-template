import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'


const routes: Array<RouteRecordRaw> = [

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  document.title = import.meta.env.VITE_APP_TITLE + ' - ' + to.meta.title
  Nprogress.start()
})

router.afterEach(() => {
  Nprogress.done()
})

export default router
