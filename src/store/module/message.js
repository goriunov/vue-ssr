const state = {
  message: 'I am testing message'
};

const mutations = {
  'CHANGE_MESSAGE'(state , newMessage){
    state.message = newMessage;
  }
};

const actions = {
  changeMessage({commit}){
    commit('CHANGE_MESSAGE' , 'I am new message')
  }
};

const getters = {
  message(state){
    return state.message;
  }
};


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}