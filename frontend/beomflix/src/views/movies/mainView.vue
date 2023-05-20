<template>
  <div>
    <navBar/>
    <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
      <div class="col-lg-8 align-self-end mb-5">
        <p class="text-white">
          무료로 원하는 영화, 만화 등을 찾아보세요.<br>
          신뢰도 높은 알고리즘으로 이용자 맞춤 영화를 추천해 드립니다.
        </p>
        <!-- <button @click="getUserId"></button> -->
      </div>
    </div>
    <div>
      <movieList class="movieList"/>
    </div>
    <div>
      <nowMovieList/>
    </div>
    <div>
      <h1 class="text-white text-center">찜한 콘텐츠 중 가장 많은 장르</h1>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/common/navbar.vue'
import movieList from '@/components/movies/movieList.vue'
import nowMovieList from '@/components/movies/nowMovieList.vue'
export default {
  name : "mainView",
  components:{
    navBar,
    movieList,
    nowMovieList,
  },
  mounted(){
    this.getMovieList()
    this.getNowMovie()
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResults;
    }
  },
  methods:{
    getMovieList(){
      this.$store.dispatch('getMovieList')
    },
    getNowMovie(){
      this.$store.dispatch('getNowMovieList')
    },
    // getUserId(){
    //   this.$store.dispatch('getUserId')
    // }
  }
}
</script>

<style>

</style>
