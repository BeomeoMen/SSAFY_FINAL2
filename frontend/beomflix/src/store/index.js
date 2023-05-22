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
    userName: null,
    likeCount: 0,
    is_liked:false,
    movieList: [],
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
    musciMovieList: [],
    mysteryMovieList: [],
    romanceMovieList: [],
    sciencefictionMovieList: [],
    thrillMovieList: [],
    tvmovieMovieList: [],
    warMovieList: [],
    westernMovieList: [],


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
    UPDATE_LIKE(state, { reviewId, is_liked, count }) {
      // 각 리뷰의 좋아요 상태와 카운트를 갱신합니다.
      state.likes[reviewId] = { is_liked, count };
    },
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
    GET_USERNAME(state, userName){
      state.userName = userName
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
      state.musciMovieList = movie
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
      state.thrillMovieList = movie
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
          console.log(res.data)
          context.commit('GET_MOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getNowMovieList(context){
      axios({
        method:'get',
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

    // 장르 별 영화
    getActionMovieList(context){
      const genre_name = "액션"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          console.log('완료')
          context.commit('GET_ACTIONMOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getAnimationMovieList(context){
      const genre_name = "애니메이션"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_ANIMATIONOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getComedyMovieList(context){
      const genre_name = "코미디"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
        Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_COMEDYMOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getCrimeMovieList(context){
      const genre_name = "범죄"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
        Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_CRIMEMOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getDocumentaryMovieList(context){
      const genre_name = "다큐멘터리"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
        Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_DOCUMENTARYMOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getDramaMovieList(context){
      const genre_name = "드라마"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
        Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_DRAMAOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getFamilyMovieList(context){
      const genre_name = "가족"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
        Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_FAMILYMOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getFantasyMovieList(context){
      const genre_name = "판타지"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
        Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_FANTASYMOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getHistoryMovieList(context){
      const genre_name = "역사"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_HISTORYMOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getHorrorMovieList(context){
      const genre_name = "공포"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_HORRORMOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getMusicMovieList(context){
      const genre_name = "음악"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_MUSICMOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getMysteryMovieList(context){
      const genre_name = "미스터리"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_MYSTERYMOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getRomanceMovieList(context){
      const genre_name = "로맨스"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_ROMANCEOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getSciencefictionMovieList(context){
      const genre_name = "SF"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_SCIENCEFICTIONMOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getThrillerMovieList(context){
      const genre_name = "스릴러"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_THRILLERMOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getTvmovieMovieList(context){
      const genre_name = "Tv 영화"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_TVMOVIEMOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getWarMovieList(context){
      const genre_name = "전쟁"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_WARMOVIELIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getWesternMovieList(context){
      const genre_name = "서부"
      axios({
        method:'get',
        url : `${API_URL}/movies/genre/?genre_name=${genre_name}`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_WESTERNMOVIELIST', res.data)
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
        context.dispatch('getReviews', movieId); 
      })
      .catch(err =>{
        console.log(err)
      })
    },
    deleteReview(context, reviewId){
      const movieId = context.state.movieDetail.id
      axios({
        method: 'delete',
        url: `${API_URL}/movies/review/${reviewId}/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
      .then(()=>{
        console.log('리뷰 삭제 완료')
        context.dispatch('getReviews', movieId); 
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    modifyReview(context, {id, user, content, rank}){
      const movieId = context.state.movieDetail.id
      axios({
        method: 'put',
        url: `${API_URL}/movies/review/${id}/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
        data:{
          user, content, rank
        }
      })
      .then(()=>{
        console.log('리뷰 수정 완료')
        context.dispatch('getReviews', movieId); 
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    likeReview(context, reviewId){
      axios({
        method: 'post',
        url: `${API_URL}/movies/review/${reviewId}/like/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        }
      })
      .then((res)=>{
        const { is_liked, count } = res.data;
        context.commit('UPDATE_LIKE', { reviewId, is_liked, count });
        console.log('좋아요');      
      })
      .catch((err)=>{
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
        axios({
          method:'get',
          url: `${API_URL}/accounts/user/`,
          headers: {
            Authorization: `Token ${context.state.token.key}`
          },
        })
        .then(res =>{
          console.log(res)
          context.commit('GET_USERID', res.data.pk)
          context.commit('GET_USERNAME', res.data.username)
        })
        .catch(err =>{
          console.log(err)
        })
    },
  },    
  modules: {
  }
})

