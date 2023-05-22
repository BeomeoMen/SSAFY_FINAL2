<template>
  <div>
    <navbar/>
    <div>
      <h1>프로필 사진, 프로필명, 팔로우와 팔로잉 부분입니다.</h1>
      <h1>사용자 이름 : {{ userName }}</h1>
      <!-- <h3>{{ movieLikes }}</h3> -->
    </div>
    <div>
      <h1>자기소개 입니다.</h1>
    </div>
    <div>
      <h1>찜한 목록 부분입니다.</h1>
      <!-- <h2>{{ movieLikes }}</h2> -->
      <h1 v-for="likedMovieIndex in likedMovies" :key="likedMovieIndex">
        <!-- {{ movieList[likedMovieIndex].title }} -->
        {{ movieList }}
        {{ likedMovieIndex }}
      </h1>
    </div>
    <div>
      <h1>방명록 부분입니다.</h1>
    </div>
  </div>  
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import { mapState } from 'vuex'
export default {
  name: "proFile",
  components:{
    navbar,
  },
  computed:{
    ...mapState([
      'userName',
      'movieLikes',
      'movieList',
      'userId'
    ]),
    likedMovies() {
      const loggedInUserId = this.userId;
      return this.movieLikes
        .map((movie, index) => ({ movie, index }))
        .filter(item => item.movie && item.movie.is_liked && item.movie.userId === loggedInUserId)
        .map(item => item.index); 
    },
  }
}
</script>

<style>

</style>