import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import NewConfView from '../views/NewConfView'
import ListConfView from '../views/ListConfView'
import DecisionTrackView from '../views/DecisionTrackView'
import ListMemberView from '../views/ListMemberView'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/newConf',
    name: 'newConf',
    component: NewConfView
  },
  {
    path: '/listConf',
    name: 'listConf',
    component: ListConfView
  },
  {
    path: '/decisionTrack',
    name: 'decisionTrack',
    component: DecisionTrackView
  },
  {
    path: '/listMember',
    name: 'listMember',
    component: ListMemberView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
