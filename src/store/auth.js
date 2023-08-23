import axios from 'axios'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
  }),
  getters: {
    token(state) {
      return state.user?.token || ''
    },
  },
  actions: {
    async login(username, password) {
      try {
        const { data: respData } = await axios.post('http://localhost:3000/api/v1/signin', {
          email: username,
          password: password,
        })
        if (respData.status === 200) {
          const userData = respData.data
          localStorage.setItem('user', JSON.stringify(userData))
          this.user = userData

          return true
        }
      } catch (error) {
        return false
      }
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
    },
  },
})
