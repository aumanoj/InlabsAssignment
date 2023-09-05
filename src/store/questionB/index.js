import axios from 'axios'

export default {
  namespaced: true,

  state: {
    users: []
  },

  getters: {
    getUsers: (state) => state.users
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit('SET_USERS', response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }
  }
}
