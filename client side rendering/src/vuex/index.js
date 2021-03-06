import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isAuthenticated: false
}

const store = new Vuex.Store({
  state,
  getter: {
    isAuthenticated: (state) => {
      return state.isAuthenticated
    }
  }
})

export default store
