import Vue from 'vue'
import Vuex from 'vuex'

import Message from './module/message'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    message: Message
  }
});

export default store;
