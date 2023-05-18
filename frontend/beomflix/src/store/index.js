import createPersistedState from 'vuex-persistedstate'
import router from '@/router'; // Vue Router의 인스턴스를 가져옵니다.
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
    movieList: [],
  },
  getters: {
    isLogin(state){
      return state.token ? true : false
    }
  },
  mutations: {
    GET_MOVIELIST(state, movie){
      state.movieList.push(movie)
    },
    SAVE_TOKEN(state, token){
      state.token = token
    },
  },
  actions: {
    getMovieList(context) {
      axios({
        method: 'get',
        url : `${API_URL}/movies/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          res.data.forEach((movie) => {
            console.log(movie)
            context.commit('GET_MOVIELIST', movie)
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    signUp(context, payload){
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2

      axios({
        method:'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          username, password1, password2
        }
      })
      .then((res) => {
        console.log(res.data)
        context.commit('SAVE_TOKEN', res.data)
      })
      .catch((err) => console.log(err))
    },

    login(context, payload){
      const username = payload.username
      const password = payload.password
      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data:{
          username, password
        },
      })
      .then(res =>{
        console.log(res.data)
        context.commit('SAVE_TOKEN', res.data)
      })
      .catch(err => console.log(err))
    },
  
    logout(context){
      context.commit('SAVE_TOKEN', null)
      router.push('/'); 
    }
  },
  modules: {
  }
})
