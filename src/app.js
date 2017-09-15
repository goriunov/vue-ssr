import Vue from 'vue'
import App from './components/App.vue'
import { sync } from 'vuex-router-sync'
import { createStore } from './store'
import { createRouter } from './router'

export function createApp() {
  const store = createStore()
  const router = createRouter()

  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}
