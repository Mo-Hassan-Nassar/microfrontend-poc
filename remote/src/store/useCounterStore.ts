import {defineStore} from 'pinia'

export default defineStore('counter', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++
    },
  },
})
