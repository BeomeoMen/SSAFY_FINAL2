<template>
  <div class="container">
    <div class="row row-cols-md-4">
      <movieListItem v-for="movie in movieList" :key="movie.id" :movie="movie"/>
    </div>
  </div>
</template>

<script>
import movieListItem from '@/components/movies/movieListItem.vue';

export default {
  name: "movieList",
  components: {
    movieListItem
  },
  computed: {
    movieList() {
      return this.$store.state.movieList;
    },
    // filteredMovieList() {
      // return this.movieList.slice(0, 20);
      // return this.movieList.slice();
    // }
  },
}
</script>

<style>

</style>
