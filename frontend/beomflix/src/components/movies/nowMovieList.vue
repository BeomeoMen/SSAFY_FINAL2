<template>
  <div class="container">
    <h1>최근 상영작</h1>
    <div class="row row-cols-md-4">
      <nowMovieListItem v-for="movie in filteredMovieList" :key="movie.id" :movie="movie"/>
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
      // console.log(this.$store.state.nowMovieList)
      return this.$store.state.nowMovieList;
    },
    filteredMovieList() {
      return this.nowMovieList.slice(0, 20);
    }
  },
}
</script>

<style scoped>
  h1{
    color: white;
    text-align: center;
    margin-bottom: 50px;
  }
</style>