import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import { useAccessTokenStore } from '@/store/accessToken'

// import managerRoutes from './manager';
import userRoutes from './user'

const routes = [...userRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (!requiresAuth) {
    localStorage.clear()
    next()
    return
  }
  // 如果路由需要验证登陆状态
  const token = useAccessTokenStore().getAccessToken()
  const isVailid = true // TODO: token有效性检查
  if (token !== '' && isVailid) {
    next()
  } else {
    next({ path: '/login' })
  }
})

export default router
