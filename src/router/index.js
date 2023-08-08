import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage.vue'
import article from '../views/articlePage.vue'
import theBoard from '../views/commiteePage.vue'
import comingSoon from '../components/ComingSoonView.vue'
import API from '../views/FormView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/article',
    name: 'article',
    component: article
  },
  {
    path: '/theboard',
    name: 'theboard',
    component: theBoard
  },
  {
    path: '/event',
    name: 'event',
    component: comingSoon
  },
  {
    path: '/register',
    name: 'register',
    component: comingSoon
  },
  {
    path: '/api',
    name: 'api',
    component: API
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
