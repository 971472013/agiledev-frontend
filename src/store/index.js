import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {
      name: window.localStorage.getItem('user') == null ? '未登录' : JSON.parse(window.localStorage.getItem('user' || '[]')).name,
      username: window.localStorage.getItem('user') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
    },
    adminMenus: []
  },
  mutations: {
    initAdminMenu (state, menus) {
      state.adminMenus = menus
    },
    login (state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
      console.log(state.user)
    },
    logout (state) {
      state.user = []
      window.localStorage.removeItem('user')
      console.log(state.user)
    }
  },
  actions: {
  }
})
