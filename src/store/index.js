import { createStore } from 'vuex'
import questionA from './questionA'
import questionB from './questionB'
// Create a new store instance.
export default createStore({
  modules: {
    questionA,
    questionB
  }
})
