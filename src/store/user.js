import { defineStore } from 'pinia'

export const user = defineStore('user', {
    state: () => ({
        userId: null,
        name: null,
        email: null
    }),
    getters: {
        isAuth() {
            return !!this.userId;
        },
    },
    actions: {
        logout() {
            this.userId = null;
            this.name = null;
            this.email = null
        }
    },
    persist: true,
})
