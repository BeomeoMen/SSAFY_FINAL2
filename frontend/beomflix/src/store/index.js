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
    userId: null,
    movieList: [],
    nowMovieList: [],
    token: Object, 
    movieDetail: Object,
    searchResults: [],
    reviews: [],
    trailerPath: 'https://www.youtube.com/embed/F-eMt3SrfFU',
  },
  getters: {
    isLogin(state){
      return state.token ? true : false
    }
  },
  mutations: {
    GET_MOVIELIST(state, movie){
      state.movieList = movie
    },
    GET_NOWMOVIELIST(state, movie){
      state.nowMovieList = movie
    },
    SAVE_TOKEN(state, token){
      state.token = token
    },
    GET_MOVIEDETAIL(state, movie){
      state.movieDetail = movie
    },
    SAVE_SEARCH_RESULTS(state, movies) {
      state.searchResults = movies;
    },
    GET_REVIEWS(state, review){
      state.reviews = review
    },
    GET_USERID(state, userId){
      state.userId = userId
    },
    // CREATE_REVIEW(state, review) {
    //   state.reviews.push(review);
    // },
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
            context.commit('GET_MOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getNowMovieList(context){
      axios({
        url : `${API_URL}/movies/now/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_NOWMOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getMovieDetail(context, movieId) {
        axios({
          method: 'get',
          url: `${API_URL}/movies/${movieId}/`,
          headers: {
            Authorization: `Token ${context.state.token.key}`
          }
        })
          .then((res) => {
            context.commit('GET_MOVIEDETAIL', res.data)
            router.push(`/movieDetail/`) 
          })
          .catch((err) => {
            console.log(err)
          })
    },
    getReviews(context, movieId){
      axios({
        method:'get',
        url: `${API_URL}/movies/${movieId}/review/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
      .then(res =>{
        context.commit('GET_REVIEWS', res.data)
      })
      .catch(err=>{
        console.log(err)
      })
    },
    createReview(context, {user, content, rank }){
      const movieId = context.state.movieDetail.id
      axios({
        method:'post',
        url: `${API_URL}/movies/${movieId}/review/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
        data: {
          user,
          content,
          rank,
        },
      })
      .then(() => {
        console.log('리뷰 작성 완료')
        context.dispatch('getReviews', movieId); // 리뷰 작성 후, 새로운 리뷰 정보를 가져옵니다.
      })
      .catch(err =>{
        console.log(err)
      })
    },
    searchMovie(context, payload){
      const title = payload.title;
      axios({
        method: 'get',
        url: `${API_URL}/movies/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          const filteredMovies = res.data.filter(movie => movie.title.includes(title));
          if(filteredMovies.length === 0){
            alert('일치하는 영화가 없습니다.')
          }else{
            context.commit('SAVE_SEARCH_RESULTS', filteredMovies);
            router.push({name: "searchMovie"}).catch(err => console.log(err))
          }
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
      .then(
        console.log('회원가입 완료')
      )
      .catch((err) => console.log(err))
    },

    login(context, payload){
      const username = payload.username
      const password = payload.password
      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data:{
          username, password,
        },
      })
      .then(res => {
          console.log(res.data)
          console.log(res)
          context.commit('SAVE_TOKEN', res.data)
          router.push({name: "mainView"}) 
          context.dispatch('getUserId');
      })
      .catch(err => {
        alert('로그인 정보가 유효하지 않습니다.')
        console.log(err)
      })
    },

    logout(context){
      context.commit('SAVE_TOKEN', null)
      router.push('/'); 
    },
    getUserId(context){
      if (context.state.token) { 
        axios({
          method:'get',
          url: `${API_URL}/accounts/user/`,
          headers: {
            Authorization: `Token ${context.state.token.key}`
          },
        })
        .then(res =>{
          console.log(res)
          console.log(res.data.pk)
          context.commit('GET_USERID', res.data.pk)
        })
        .catch(err =>{
          console.log(err)
        })
      }
    }
  },    
  modules: {
  }
})

