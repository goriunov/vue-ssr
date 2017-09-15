import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const ItemView = () => import('../views/ItemView.vue')

import App from '../components/App.vue'

export function createRouter() {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: App }
    ]
  })
}