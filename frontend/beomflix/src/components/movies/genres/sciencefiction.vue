<template>
  <div>
    <navbar/>
    <div class="container">
      <h1>SF</h1>
      <div class="row row-cols-md-4">
        <sciencefictionItem v-for="movie in sciencefictionMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";
import sciencefictionItem from '@/components/movies/genres/sciencefictionItem.vue'

export default {
  name: "seiencefictionPage",
  components: {
    navbar,
    sciencefictionItem
  },
  mounted() {
    this.getSciencefictionMovieList();
  },
  computed: {
    sciencefictionMovieList() {
      return this.$store.state.sciencefictionMovieList;
    },
  },
  methods: {
    getSciencefictionMovieList() {
      this.$store.dispatch("getSciencefictionMovieList");
    },
  },
};
</script>

<style>

</style>
