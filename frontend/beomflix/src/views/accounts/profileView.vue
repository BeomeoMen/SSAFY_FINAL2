<template>
  <div>
    <navbar/>
    <div>
      <h1>프로필 사진, 프로필명, 팔로우와 팔로잉 부분입니다.</h1>
      <h1>사용자 이름 : {{ USERNAME }}</h1>
      <!-- <button class="btn btn-primary" v-if="isProFileOwner" @click="follow">Follow</button> -->
      <!-- <button class="btn btn-primary" v-if="isProFileOwner" @click="follow">UnFollow</button> -->
      <h1>{{USERID}}</h1>
    </div>
    <div>
      <h1>자기소개 입니다.</h1>
      <!-- <input type="text" v-model="introduce" @keyup.enter="createIntroduce"> -->
      <!-- <h1>{{ introduce }}</h1> -->
    </div>
    <div>
      <h1>찜한 목록 부분입니다.</h1>
      <h1 v-for="likedMovieIndex in likedMovies" :key="likedMovieIndex">
        <h2>{{ movieList[likedMovieIndex] }}</h2>
        <h2>{{ likedMovieIndex }}</h2>
      </h1>
    </div>
    <div>
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
    ]),
    isProFileOwner(){
      return this.userId !== this.USERID
    },
    likedMovies() {
      const loggedInUserId = this.userId;
      console.log(Object.keys(this.movieLikes))
      return Object.keys(this.movieLikes)
        .filter(movieId => {
          const movie = this.movieLikes[movieId];
          return movie.is_liked && movie.userId === loggedInUserId;
        })
        .map(movieId => parseInt(movieId));
    },
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
    // follow(){
    //   const is_followed =
    //   const followers_count = 
    //   const followings_count = 
    // //   - is_followed : Boolean
    // // - 이미 팔로우 중인지
    // // - followers_count : int
    // //     - 현재 팔로우 한 상대의 팔로워 수
    // // - followings_count : int
    // //     - 나의 현재 팔로잉 수
    // }
  }
}
</script>

<style>

</style>