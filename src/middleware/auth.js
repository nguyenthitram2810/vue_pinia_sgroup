import { useAuthStore } from '@/store'

export const authentication = (to, from, next) => {
  const authStore = useAuthStore()
  // Check if authentication is not require
  if (to.meta?.authNotRequired) {
    return authStore.token ? next({ name: 'dashboard' }) : next()
  } else {
    return authStore.token ? next() : next({ name: 'login' })
  }
}
