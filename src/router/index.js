import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'
import Cookies from 'js-cookie'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  // 看看 to 和 from 兩個 arguments 會吐回什麼訊息
  console.log('to: ', to)
  console.log('from: ', from)

  // 目的路由在meta上是否有設置requireAuth: true
  if (to.meta.requireAuth) {
    // 獲取Cookies當中的login資訊並取得token
    const info = Cookies.get('login')
    if (info) {
      const token = JSON.parse(info).token
      // 如果token不為空，且確實有這個欄位則讓路由變更
      if (token.length > 0 || token === undefined) {
        next()
      } else {
        // 未通過則導回login頁面
        console.log('no token')
        next({ name: 'login' })
      }
    } else {
      console.log('沒有 login cookie')
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

export default router
