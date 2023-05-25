<template>
  <div>
    <navbar/>
    <div class="container">
      <h1 style="color: white; margin: 20px;" >음악</h1>
      <div class="row row-cols-md-4">
        <musicItem v-for="movie in musicMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";
import musicItem from '@/components/movies/genres/musicItem.vue'

export default {
  name: "musicPage",
  components: {
    navbar,
    musicItem
  },
  mounted() {
    this.getMusicMovieList();
  },
  computed: {
    musicMovieList() {
      return this.$store.state.musicMovieList;
    },
  },
  methods: {
    getMusicMovieList() {
      this.$store.dispatch("getMusicMovieList");
    },
  },
};
</script>

<style>

</style>
