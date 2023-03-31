import { createRouter, createWebHistory } from 'vue-router'
import LayoutViewVue from '@/layout/LayoutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LayoutViewVue
    }
  ]
})

export default router
