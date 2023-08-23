export const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/Login.vue'),
    meta: {
      // layout: 'noAuth',
      // Different from auth: false, this will redirect to dashboard if authenticated
      authNotRequired: true,
    },
  },
]

export default { routes }
