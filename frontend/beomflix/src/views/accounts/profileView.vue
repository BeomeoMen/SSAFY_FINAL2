<template>
  <div>
    <navbar/>
    <div class="profile">
      <h1>프로필 사진, 프로필명, 팔로우와 팔로잉 부분입니다.</h1>
      <h1>사용자 이름 : {{ USERNAME }}</h1>
      <button class="btn btn-primary" v-if="isNotProFileOwner" @click="follow">Follow</button>
      <button class="btn btn-primary" v-if="isNotProFileOwner" @click="follow">UnFollow</button>
      <h2>followers : {{ follows.followers }}</h2>
      <h2>followings : {{ follows.followings }}</h2>
      <div>
        <h1>자기소개 입니다.</h1>
        <!-- <input type="text" v-model="introduce" @keyup.enter="createIntroduce"> -->
        <!-- <h1>{{ introduce }}</h1> -->
      </div>
    </div>
    <div class="likeMovies">
      <h1>찜한 목록 부분입니다.</h1>
      <h1 v-for="movie in filteredMovies" :key="movie.id">
        <h2 @click="movieDetail(movie.id)">{{ movie.title }}</h2>
      </h1>
    </div>
    <div class="guestBook">
      <h1>방명록 부분입니다.</h1>
      <input type="text" v-model="guestBook" @keyup.enter="createGuestBooke">
      <guestBookList/>
    </div>
  </div>  
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import { mapState } from 'vuex'
import guestBookList from '@/components/comments/guestBookList.vue'
export default {
  name: "proFile",
  components:{
    navbar,
    guestBookList
  },
  data(){
    return{
      introduce : null,
      guestBook: null,
    }
  },
  mounted(){
    this.getGuestBook()
  },
  computed:{
    ...mapState([
      'userId',
      'userName',
      'USERID',
      'USERNAME',
      'movieLikes',
      'movieList',
      'likeMovie',
      'follows',
    ]),
    isNotProFileOwner(){
      return this.userId !== this.USERID
    },
    filteredMovies() {
      return this.movieList.filter(movie => this.likeMovie.includes(movie.id));
    }
  },
  methods:{
    createIntroduce(){
      this.$store.commit('createIntroduce')
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
      console.log(userName)
      this.$store.dispatch('follow', userName)
    }
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
</style>