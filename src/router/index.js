import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

// route-level code splitting

import NotLazyLoadedComponent from '../components/NotLazyLoadedComponent.vue';
const LazyLoadedComponent = () => System.import('../components/LazyComponent.vue');


export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/' , component: NotLazyLoadedComponent},
        { path: '/lazy' , component: LazyLoadedComponent}
    ]
  })
}
