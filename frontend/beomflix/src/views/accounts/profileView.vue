<template>
  <div>
    <navbar/>
    <div class="profile">
      <h1>사용자 이름 : {{ USERNAME }}</h1>
      <button class="btn btn-primary" v-if="isNotProFileOwner" @click="follow">Follow</button>
      <button class="btn btn-primary" v-if="isNotProFileOwner" @click="follow">UnFollow</button>
      <h2>followers : <span @click="openFollowersModal">{{ getFollowers.length }}</span></h2>
      <modal v-if="isFollowersModalOpen" @close="closeFollowersModal">
        <h3>Followers</h3>
        <ul>
          <li v-for="follower in getFollowers" :key="follower.id">{{ follower.username }}</li>
        </ul>
      </modal>
      <h2>followings : {{ getFollowings.length }}</h2>
      <div class="self">
        <h1>자기소개</h1>
        <input type="text" v-model="content" v-if="!isNotProFileOwner" @keyup.enter="createIntroduce">
        <h1>{{ getContnet }}</h1>
      </div>
    </div>
    <div class="likeMovies">
      <h1>{{USERNAME}}이 찜한 영화</h1>
      <h1 v-for="movie in filteredMovies" :key="movie.id">
        <h2 @click="movieDetail(movie.id)">{{ movie.title }}</h2>
      </h1>
    </div>
    <div class="guestBook">
      <h1>방명록</h1>
      <input type="text" v-model="guestBook" v-if="isNotProFileOwner" @keyup.enter="createGuestBooke">
      <guestBookList/>
    </div>
  </div>  
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import { mapState } from 'vuex'
import guestBookList from '@/components/comments/guestBookList.vue'
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: "proFile",
  components:{
    navbar,
    guestBookList,

  },
  data(){
    return{
      content : null,
      guestBook: null,
      getContnet: null,
      getFollowers: [],
      getFollowings: [],
      isFollowersModalOpen: false,
      likeMovie: []
    }
  },
  mounted(){
    this.getGuestBook()
    this.getIntroduce()
    this.getFollower()
    this.getFollowing()
  },
  computed:{
    ...mapState([
      'userId',
      'userName',
      'USERID',
      'USERNAME',
      'movieLikes',
      'movieList',
      // 'likeMovie',
      'follows',
      'introduce'
    ]),
    isNotProFileOwner(){
      return this.userId !== this.USERID
    },
    filteredMovies() {
      return this.movieList.filter(movie => this.likeMovie.includes(movie.id));
    },
  },
  methods:{
    openFollowersModal() {
      this.isFollowersModalOpen = true;
    },
    closeFollowersModal() {
      this.isFollowersModalOpen = false;
    },
    createIntroduce(){
      const introduce = this.content
      const profile = this.USERID
      this.$store.dispatch('createIntroduce', {profile, introduce})
      location.reload()
    },
    getLikeMovie(){
      axios({
        method: 'get',
        url: `${API_URL}/movies/liked_movies/`,
        headers: {
          Authorization: `Token ${this.$store.state.token.key}`,
        }
      })
      .then((res)=>{
        console.log(res.data)
        this.likeMovie = res.data
        // context.commit('GET_MOVIELIKE', res.data)
        
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    getIntroduce(){
      axios({
        method:'get',
        url: `${API_URL}/accounts/profile/${this.USERID}/introduce/`,
        headers: {
          Authorization: `Token ${this.$store.state.token.key}`,
        },
      })
      .then((res) => {
        this.getContnet = res.data
        console.log('자기소개 조회 완료')
      })
      .catch(err =>{
        console.log(err)
      })
    },
    createGuestBooke(){
      const profile = this.USERID
      const user = this.userId
      const content = this.guestBook
      console.log(profile, user, content)
      this.$store.dispatch('createGuestBook', {profile, user, content})
      location.reload()
    },
    getGuestBook(){
      this.$store.dispatch('getGuestBook', this.USERID)
    },
    movieDetail(movieId) {
      this.$store.dispatch('getMovieDetail', movieId);
    },

    follow(){
      const userName = this.USERNAME
      this.$store.dispatch('follow', userName)
    },
    getFollower(){
      axios({
        method:'get',
        url:`${API_URL}/accounts/profile/${this.USERID}/follower/`,
        headers: {
          Authorization: `Token ${this.$store.state.token.key}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        this.getFollowers = res.data
        console.log("팔로워 조회 완료")
      })
      .catch((err) => {
        console.log(err)
      })
    },
    getFollowing(){
      axios({
        method:'get',
        url:`${API_URL}/accounts/profile/${this.USERID}/following/`,
        headers: {
          Authorization: `Token ${this.$store.state.token.key}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        this.getFollowings = res.data
        console.log("팔로잉 조회 완료")
      })
      .catch((err) => {
        console.log(err)
      })
    },
  }
}
</script>

<style>
  .profile{
    border: solid 1px white;    
    color: white;
  }
  .likeMovies{
    border: solid 1px white;   
    color: white;
  }
  .guestBook{
    border: solid 1px white;    
    color: white;
  }
  .self{
    border: solid 1px white;    
    color: white;
  } 
</style>