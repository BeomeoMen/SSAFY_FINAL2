import createPersistedState from 'vuex-persistedstate'
import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import userModule from '@/store/user'

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

    reviewLikeCount: 0,
    review_is_liked:false,
    reviewLikes: [],

    movieLikeCount: 0,
    movie_is_liked:false,
    movieLikes: Object,
    // likeMovie : [],

    movieList: Object,
    nowMovieList: [],

    introduce:Object,
    guestBookList : null,

    follows:[],
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

    recommendGenre:[],
    popularMovie:[],
    token: Object, 
    movieDetail: Object,
    searchResults: [],
    reviews: [],

  },
  getters: {
    // isLogin(state){
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

    UPDATE_LIKE(state, { reviewId, is_liked, count }) {
      state.reviewLikes[reviewId] = { is_liked, count };
    },
    UPDATE_MOVIE_LIKE(state, { movieId, userId, is_liked, count }) {
      state.movieLikes[movieId] = { userId, is_liked, count };
    },    
    // GET_MOVIELIKE(state, movie){
    //   state.likeMovie = movie
    // },

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
    GET_USER_ID(state, USERID){
      state.USERID = USERID
    },
    GET_USER_NAME(state, USERNAME){
      state.USERNAME = USERNAME
    },

    GET_INTRODUCE(state, {introduce, profile}){
      state.introduce[profile] = introduce
    },
    GET_GUESTBOOKLIST(state, guestBookList){
      state.guestBookList = guestBookList
    },
    GET_FOLLOW(state, {now_followers_count, now_followings_count,target_followers_count, target_followings_count, is_followed}){
      state.follows = {now_followers_count, now_followings_count,target_followers_count, target_followings_count, is_followed}
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
    
    GET_RECOMMENDGENRE(state, movie){
      state.recommendGenre = movie
    },
    GET_POPULARMOVIE(state, movie){
      state.popularMovie = movie
    }

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
      const genre_name = "TV 영화"
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
        context.dispatch('getReviews', movieId); 
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    likeMovie(context, movieId){
      axios({
        method: 'post',
        url: `${API_URL}/movies/like_movie/${movieId}/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        }
      })
      .then((res)=>{
        const is_liked = res.data.is_liked
        const count = res.data.count
        const userId = res.data.user_id
        const movieId = res.data.movie_id
        context.commit('UPDATE_MOVIE_LIKE', {movieId, userId, is_liked, count})
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
        const is_liked = res.data.is_liked
        const count = res.data.count
        context.commit('UPDATE_LIKE', { reviewId, is_liked, count });
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
          const filteredMovies = res.data.movies.filter(movie => movie.title.includes(title));
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
      .then(() =>{
        alert('회원가입 완료!') 
      })
      .catch((err) => {
        console.log(err)
        alert("회원가입 정보가 올바르지 않습니다.")
      })
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
          console.log(res)
          context.commit('SAVE_TOKEN', res.data)
          context.commit('setLoggedIn', true)
          context.commit('setShowIntro', true)
          router.push({name: "introVideo"}) 
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
          context.commit('GET_USERID', res.data.pk)
          context.commit('GET_USER_NAME', res.data.username)
        })
        .catch(err =>{
          console.log(err)
        })
    },

    getUSERID(context){
      axios({
        method:'get',
        url: `${API_URL}/accounts/user/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
      .then(res =>{
        context.commit('GET_USER_ID', res.data.pk)

      })
      .catch(err =>{
        console.log(err)
      })
    },

    modifyUser(context, {new_password1, new_password2}){
      axios({
        method:'post',
        url: `${API_URL}/accounts/password/change/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
        data:{
          new_password1, new_password2
        }
      })
      .then(res =>{
        console.log(res)
      })
      .catch(err =>{
        console.log(err)
      })
    },

    getUserProfile(context, userId){
      axios({
        method:'get',
        url: `${API_URL}/accounts/profile/${userId}/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
      .then(res =>{
        context.commit('GET_USER_ID', res.data.id)
        context.commit('GET_USER_NAME', res.data.username)
        router.push(`/proFile/${res.data.id}/`) 
      })
      .catch(err =>{
        console.log(err)
      })
    },

    createGuestBook(context, {profile, user, content }){
      axios({
        method:'post',
        url: `${API_URL}/comments/profileuser/${profile}/comment/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
        data: {
          profile,
          user,
          content,
        },
      })
      .then(() => {
      })
      .catch(err =>{
        console.log(err)
      })
    },

    getGuestBook(context, USERID){
      axios({
        method:'get',
        url: `${API_URL}/comments/profileuser/${USERID}/comments/`,
        
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
      .then((res) => {
        context.commit('GET_GUESTBOOKLIST', res.data)
      })
      .catch(err =>{
        console.log(err)
      })
    },
    deleteGuestBook(context, {profileId, guestBookId}){
      axios({
        method: 'delete',
        url: `${API_URL}/comments/profileuser/${profileId}/comment/${guestBookId}/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
      .then(()=>{
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    follow(context, userName){
      axios({
        method:'post',
        url:`${API_URL}/accounts/profile/${userName}/follow/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
      .then(() => {
        
      })
      .catch((err) => {
        console.log(err)
      })
    },

    createIntroduce(context, {profile, introduce}){
      axios({
        method:'put',
        url: `${API_URL}/accounts/profile/${profile}/introduce/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
        data: {
          introduce,
        },
      })
      .then(() => {
      })
      .catch(err =>{
        console.log(err)
      })
    },

    createPicture(context, {profile, profile_picture}){
      axios({
        method:'put',
        url: `${API_URL}/accounts/profile/${profile}/introduce/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
        data: {
          profile_picture,
        },
      })
      .then(() => {
      })
      .catch(err =>{
        console.log(err)
      })
    },
    
    getRecommendGenre(context){
      axios({
        method:'get',
        url : `${API_URL}/movies/recommend_genre/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_RECOMMENDGENRE', res.data.movies)
        })
        .catch((err) => {
          console.log('좋아요 한 영화가 없습니다. 랜덤으로 추천 영화를 출력하겠습니다.')
          console.log(err)
        })
    },
    getPopluarMovie(context){
      axios({
        method:'get',
        url : `${API_URL}/movies/popular/`,
        headers: {
          Authorization: `Token ${context.state.token.key}`
        },
      })
        .then((res) => {
          context.commit('GET_POPULARMOVIE', res.data.movies)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    

  },    
  modules: {
  }
})

