import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import NewConfView from '../views/NewConfView'
import DecisionTrackView from '../views/DecisionTrackView'
import ListMemberView from '../views/ListMemberView'
import ListConfView from '../views/ListConfView'
import Cookies from 'js-cookie'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { requireAuth: true }
  },
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/newConf',
    name: 'newConf',
    component: NewConfView,
    meta: { requireAuth: true }
  },
  {
    path: '/listConf',
    name: 'listConf',
    component: ListConfView,
    meta: { requireAuth: true }
  },
  {
    path: '/decisionTrack',
    name: 'decisionTrack',
    component: DecisionTrackView,
    meta: { requireAuth: true }
  },
  {
    path: '/listMember',
    name: 'listMember',
    component: ListMemberView,
    meta: { requireAuth: true }
  },
  // get id of conference
  {
    path: '/listConf/:confId',
    name: 'meetingDetail',
    component: ListConfView
  }
]

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
