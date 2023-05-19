<template>
  <div class="container">
    <h1>최근 상영작</h1>
    <div class="row row-cols-md-4">
      <nowMovieListItem v-for="nowMovie in nowMovieList" :key="nowMovie.id" :nowMovie="nowMovie"/>
    </div>
  </div>
</template>

<script>
import nowMovieListItem from '@/components/movies/nowMovieListItem.vue'
export default {
  name:"nowMovieList",
  components:{
    nowMovieListItem,
  },
  computed: {
    nowMovieList() {
      return this.$store.state.nowMovieList;
    },
  },
}
</script>

<style scoped>
  h1{
    color: white;
    text-align: center;
  }
</style>