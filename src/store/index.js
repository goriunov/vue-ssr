import Vue from 'vue'
import Vuex from 'vuex'

import Message from './module/message'


Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store({
      modules: {
          message: Message
      }
  })
}
