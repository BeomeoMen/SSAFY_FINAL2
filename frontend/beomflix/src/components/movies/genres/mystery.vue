<template>
  <div>
    <navbar/>
    <div class="container">
      <h1>미스테리</h1>
      <div class="row row-cols-md-4">
        <mysteryItem v-for="movie in mysteryMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import mysteryItem from '@/components/movies/genres/mysteryItem.vue'

export default {
  name: "mysteryPage",
  components: {
    navbar,
    mysteryItem
  },

  mounted() {
    this.getMysteryMovieList();
  },
  computed: {
    mysteryMovieList() {
      return this.$store.state.mysteryMovieList;
    },
  },
  methods: {
    getMysteryMovieList() {
      this.$store.dispatch("getMysteryMovieList");
    },
  },
};
</script>

<style>

</style>
