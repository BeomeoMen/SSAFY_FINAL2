import createPersistedState from 'vuex-persistedstate'
import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import userModule from '@/store/user'

const API_URL = 'http://127.0.0.1:8000'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
   ],
   state: {
    movieLikeCount: 0,
    movie_is_liked:false,
    movieLikes: Object,
    likeMovie : [],

    movieList: Object,
    nowMovieList: [],

    // 장르 별 영화
    actionMovieList: [],
    animationMovieList: [],
    comedyMovieList: [],
    crimeMovieList: [],
    documentaryMovieList: [],
    dramaMovieList: [],
    familyMovieList: [],
    fantasyMovieList: [],
    historyMovieList: [],
    horrorMovieList: [],
    musicMovieList: [],
    mysteryMovieList: [],
    romanceMovieList: [],
    sciencefictionMovieList: [],
    thrillerMovieList: [],
    tvmovieMovieList: [],
    warMovieList: [],
    westernMovieList: [],
    movieDetail: Object,
    searchResults: [],
   },
   mutations:{
    GET_MOVIELIST(state, movie){
      state.movieList = movie
    },
    GET_NOWMOVIELIST(state, movie){
      state.nowMovieList = movie
    },
    // 장르 별 영화
    GET_ACTIONMOVIELIST(state, movie){
      state.actionMovieList = movie
    },
    GET_ANIMATIONOVIELIST(state, movie){
      state.animationMovieList = movie
    },
    GET_COMEDYMOVIELIST(state, movie){
      state.comedyMovieList = movie
    },
    GET_CRIMEMOVIELIST(state, movie){
      state.crimeMovieList = movie
    },
    GET_DOCUMENTARYMOVIELIST(state, movie){
      state.documentaryMovieList = movie
    },
    GET_DRAMAOVIELIST(state, movie){
      state.dramaMovieList = movie
    },
    GET_FAMILYMOVIELIST(state, movie){
      state.familyMovieList = movie
    },
    GET_FANTASYMOVIELIST(state, movie){
      state.fantasyMovieList = movie
    },
    GET_HISTORYMOVIELIST(state, movie){
      state.historyMovieList = movie
    },
    GET_HORRORMOVIELIST(state, movie){
      state.horrorMovieList = movie
    },
    GET_MUSICMOVIELIST(state, movie){
      state.musicMovieList = movie
    },
    GET_MYSTERYMOVIELIST(state, movie){
      state.mysteryMovieList = movie
    },
    GET_ROMANCEOVIELIST(state, movie){
      state.romanceMovieList = movie
    },
    GET_SCIENCEFICTIONMOVIELIST(state, movie){
      state.sciencefictionMovieList = movie
    },
    GET_THRILLERMOVIELIST(state, movie){
      state.thrillerMovieList = movie
    },
    GET_TVMOVIEMOVIELIST(state, movie){
      state.tvmovieMovieList = movie
    },
    GET_WARMOVIELIST(state, movie){
      state.warMovieList = movie
    },
    GET_WESTERNMOVIELIST(state, movie){
      state.westernMovieList = movie
    },
},
    
    }
  })