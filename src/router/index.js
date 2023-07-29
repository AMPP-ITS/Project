import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage.vue'
import article from '../views/articlePage.vue'
import commitee from '../views/commiteePage.vue'
import comingSoon from '../components/ComingSoonView.vue'

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
    path: '/commitee',
    name: 'commitee',
    component: commitee
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
