import { login } from '@/api'
import localStore from 'store'
import router from '@/router'

const user = {
  state: {
    username: '',
    token: '',
    authentication: localStore.get('authentication') || []
  },
  mutations: {
    SET_USERINFO: (state, { username, token, authentication }) => {
      state.username = username
      state.token = token
      state.authentication = authentication
    }
  },
  actions: {
    async userInfo({ commit }, data) {
      let { userInfo } = await login(data)
      debugger
      commit('SET_USERINFO', userInfo)
      let { token, username, authentication } = userInfo
      localStore.set('token', token)
      localStore.set('authentication', authentication)
      localStore.set('username', username)
    },
    logout({ commit }) {
      // await logout();
      commit('SET_USERINFO', {})
      localStore.remove('token')
      localStore.remove('username')
      localStore.remove('authentication')
      router.replace('login')
    }
  }
}

export default user
