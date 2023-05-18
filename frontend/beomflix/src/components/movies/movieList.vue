<template>
  <div class="movie-list">
    <h1>movieList</h1>
    <movieListItem v-for="movie in movieList()" :key="movie.id" :movie="movie"/>
  </div>
</template>

<script>
import movieListItem from '@/components/movies/movieListItem.vue';
export default {
  name:"movieList",
  components:{
    movieListItem
  },
  methods:{
    movieList(){
      return this.$store.state.movieList
    }
  },
  

  
}
</script>

<style>

</style>
