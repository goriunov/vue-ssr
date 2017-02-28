import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import VueAxios from 'vue-axios'
import axios from 'axios'


// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

//Bind HTTP requests
Vue.use(VueAxios, axios);

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue({
  router,
  store,
  ...App
});



// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store };
