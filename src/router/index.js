import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Comment from '../components/Comment.vue'
import Item from '../components/Item.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/one', component: Comment },
    { path: '/two', component: Item }
  ]
})
