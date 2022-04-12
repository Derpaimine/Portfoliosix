import { createRouter, createWebHistory } from 'vue-router'
import landingSection from '../views/LandingSectionView.vue'
const routes = [
  {
    path: '/',
    name: 'LandingSection',
    component: () => import( '../views/LandingSectionView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
