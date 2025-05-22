import { defineStore } from 'pinia'

export const useAccessTokenStore = defineStore('accessToken', {
  state: () => {
    return {
      name: '' as string,
      token: '' as string,
    }
  },
  getters: {
    getName: (state) => () => {
      return state.name
    },
    getAccessToken: (state) => () => {
      return state.token
    },
  },
  actions: {
    setName(name: string) {
      this.name = name
    },
    removeName() {
      this.name = ''
    },
    setAccessToken(token: string) {
      this.token = token
    },
    removeAccessToken() {
      this.token = ''
    },
  },
  persist: true,
})
