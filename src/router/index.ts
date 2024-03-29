import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutViewVue from '@/layout/LayoutView.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/chat',
      component: LayoutViewVue,
      children: [
        {
          path: '/chat',
          name: 'chat',
          component: () => import('@/views/chat/ChatView.vue')
        },
        {
          path: '/github',
          name: 'github',
          component: () => import('@/views/MyGithub.vue')
        },
        {
          path: '/listModels',
          name: 'listModels',
          component: () => import('@/views/GptModels.vue')
        }
      ]
    }
  ],
  scrollBehavior(to) {
    // return 期望滚动到哪个的位置
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export default router
