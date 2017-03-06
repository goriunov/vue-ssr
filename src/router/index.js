import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Comment from '../components/Comment.vue'

const Item = process.BROWSER  ? () => System.import('../components/Item.vue') : require('../components/Item.vue');

let router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/one', component: Comment },
    { path: '/two', component: Item },
    { path: '*', redirect: '/one' }
  ]
});


export default router;
