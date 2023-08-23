import { createRouter, createWebHistory } from 'vue-router'

import auth from '@/router/auth'
import { authentication } from '@/middleware/auth'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard/Home.vue'),
      },
      {
        path: 'users',
        name: 'user-list',
        component: () => import('@/views/dashboard/users/UserList.vue'),
      },
      {
        path: '/card',
        name: 'card',
        component: () => import('@/views/Card.vue'),
      },
    ],
  },
  ...auth.routes,
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes,
})

router.beforeEach(authentication)

export default router
