<template>
  <div>
    <navBar/>
    <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
      <div class="col-lg-8 align-self-end mb-5">
        <p class="text-white">
          무료로 원하는 영화, 만화 등을 찾아보세요.<br>
          신뢰도 높은 알고리즘으로 이용자 맞춤 영화를 추천해 드립니다.
        </p>
      </div>
    </div>
    <div>
      <movieList/>
    </div>
    <div>
      <h1 class="text-white text-center">평점 상위 10</h1>\
    </div>
    <div>
      <h1 class="text-white text-center">찜한 콘텐츠 중 가장 많은 장르</h1>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/common/navbar.vue'
import movieList from '@/components/movies/movieList.vue'

export default {
  name : "mainView",
  components:{
    navBar,
    movieList,
  },
  mounted(){
    this.getMovieList()
  },
  methods:{
    getMovieList(){
      this.$store.dispatch('getMovieList')
    }
  }
}
</script>

<style>

</style>
