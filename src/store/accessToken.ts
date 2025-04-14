import { defineStore } from 'pinia';

export const useAccessTokenStore = defineStore('accessToken', {
  state: () => {
    return {
      token: '' as string,
    };
  },
  getters: {
    getAccessToken: (state) => () => {
      return state.token;
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    removeToken() {
      this.token = '';
    },
  },
  persist: true,
});
