export default {
  namespaced: true,
  state: {
    childBMessage: ''
  },
  getters: {},

  mutations: {
    data(state, data) {
      state.childBMessage = data
    }
  },
  actions: {
    updateChildBMessage({ commit }, data) {
      commit('data', data)
    }
  }
}
