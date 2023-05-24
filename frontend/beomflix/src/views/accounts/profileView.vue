<template>
  <div>
    <navbar/>
    <div class="profile">
      <h1>사용자 이름 : {{ USERNAME }}</h1>
      <button class="btn btn-primary" v-if="isNotProFileOwner" @click="follow">Follow</button>
      <button class="btn btn-primary" v-if="isNotProFileOwner" @click="follow">UnFollow</button>


      <h2 v-if="this.followerCheck" @click="isFollowers">followers : {{ getFollowers.length }}</h2>
      <span v-else-if="getFollowers.length != 0">
        <h2 v-for="follower in getFollowers" :key="follower.id"  @click="isFollowers">followers : {{ follower.username }}</h2>
      </span>
      <span v-else-if="getFollowers.length == 0">
        <h2 @click="isFollowers">followers : {{ getFollowers.length }}</h2>        
      </span>


      <h2 v-if="this.followingsCheck" @click="isFollowings">followings : {{ getFollowings.length }}</h2>
      <span v-else-if="getFollowings.length != 0">
        <h2 @click="isFollowings"> followings : </h2><h2 v-for="follower in getFollowings" :key="follower.id"  @click="isFollowings">{{ follower.username }}</h2>        
      </span>
      <span v-else-if="getFollowings.length == 0">
        <h2 @click="isFollowings">followings : {{ getFollowings.length }}</h2>        
      </span>

      <div class="self">
        <h1>자기소개</h1>
        <input type="text" v-model="content" v-if="!isNotProFileOwner" @keyup.enter="createIntroduce" >
        <!-- <input type="file" > -->
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
      likeMovie: [],
      followerCheck: true,
      followingsCheck: true,
    }
  },
  mounted(){
    this.getGuestBook()
    this.getIntroduce()
    this.getFollower()
    this.getFollowing()
    this.getLikeMovie()
  },
  computed:{
    ...mapState([
      'userId',
      'userName',
      'USERID',
      'USERNAME',
      'movieLikes',
      'movieList',
      'follows',
      'introduce'
    ]),
    isNotProFileOwner(){
      return this.userId !== this.USERID
    },
    filteredMovies() {
      return this.movieList.movies.filter(movie => this.likeMovie.includes(movie.id));
    },
  },
  methods:{
    isFollowers(){
      return this.followerCheck = !this.followerCheck
    },
    isFollowings(){
      return this.followingsCheck = !this.followingsCheck
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
        url: `${API_URL}/movies/${this.USERID}/liked_movies/`,
        headers: {
          Authorization: `Token ${this.$store.state.token.key}`,
        }
      })
      .then((res)=>{
        this.likeMovie = res.data        
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
      })    
      .catch(err =>{
        console.log(err)
      })
    },
    createGuestBooke(){
      const profile = this.USERID
      const user = this.userId
      const content = this.guestBook
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
      location.reload()
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
        this.getFollowers = res.data
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
        this.getFollowings = res.data
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