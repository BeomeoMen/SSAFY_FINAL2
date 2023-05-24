<template>
  <div>
    <navbar/>
    <div class="container">
      <h1>TV 영화</h1>
      <div class="row row-cols-md-4">
        <tvmovieItem v-for="movie in tvmovieMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";
import tvmovieItem from '@/components/movies/genres/tvmovieItem.vue'

export default {
  name: "tvmoviePage",
  components: {
    navbar,
    tvmovieItem
  },
  mounted() {
    this.getTvmovieMovieList();
  },
  computed: {
    tvmovieMovieList() {
      return this.$store.state.tvmovieMovieList;
    },
  },
  methods: {
    getTvmovieMovieList() {
      this.$store.dispatch("getTvmovieMovieList");
    },
  },
};
</script>

<style>

</style>
