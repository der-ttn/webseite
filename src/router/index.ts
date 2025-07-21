import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/installationen',
      name: 'installations',
      component: () => import('../views/InstallationsView.vue'),
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/satzung',
      name: 'satzung',
      component: () => import('../views/SatzungView.vue'),
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: () => import('../views/ImprintView.vue'),
    },
  ],
})

export default router
