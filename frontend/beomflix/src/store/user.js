import createPersistedState from 'vuex-persistedstate'
import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    isLoggedIn: false,
    showIntro: false,
    userId: null,
    userName: null,
    USERID: null,
    USERNAME: null,
    token: Object,
  },
  getters: {
    // isLogin(state) {
    //   return state.token ? true : false
    // }
  },
  mutations: {
    setLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn
    },
    setShowIntro(state, showIntro) {
      state.showIntro = showIntro
    },
    SAVE_TOKEN(state, token) {
      state.token = token
    },
    GET_USERID(state, userId) {
      state.userId = userId
    },
    GET_USERNAME(state, userName) {
      state.userName = userName
    },
    GET_USER_ID(state, USERID) {
      state.USERID = USERID
    },
    GET_USER_NAME(state, USERNAME) {
      state.USERNAME = USERNAME
    },
  },
  actions: {
    signUp(context, payload) {
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2

      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          username, password1, password2
        }
      })
        .then(
          console.log('회원가입 완료')
        )
        .catch((err) => {
          console.log(err)
          alert("회원가입 정보가 올바르지 않습니다.")
        })
    },

    login(context, payload) {
      const username = payload.username
      const password = payload.password
      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username, password,
        },
      })
        .then(res => {
          context.commit('SAVE_TOKEN', res.data)
          context.commit('setLoggedIn', true)
          context.commit('setShowIntro', true)
          router.push({ name: "introVideo" })
          context.dispatch('getUserId');
          console.log(res.data)
        })
        .catch(err => {
          alert('로그인 정보가 유효하지 않습니다.')
          console.log(err)
        })
    },
    logout(context) {
      context.commit('SAVE_TOKEN', null)
      router.push('/');
    },
    getUserId(context) {
      axios({
        method: 'get',
        url: `${API_URL}/accounts/user/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then(res => {
          console.log(res)
          context.commit('GET_USERID', res.data.pk)
          context.commit('GET_USER_NAME', res.data.username)
        })
        .catch(err => {
          console.log(err)
        })
    },

    getUSERID(context) {
      axios({
        method: 'get',
        url: `${API_URL}/accounts/user/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then(res => {
          context.commit('GET_USER_ID', res.data.pk)

        })
        .catch(err => {
          console.log(err)
        })
    },
  },
})
