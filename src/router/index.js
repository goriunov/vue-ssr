import Vue from 'vue'
import Router from 'vue-router'
import NotLazyLoadedComponent from '../components/NotLazyLoadedComponent.vue';

Vue.use(Router);

const LazyLoadedComponent = () => System.import('../components/LazyComponent.vue');

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/' , component: NotLazyLoadedComponent},
    { path: '/lazy' , component: LazyLoadedComponent}
  ]
})
