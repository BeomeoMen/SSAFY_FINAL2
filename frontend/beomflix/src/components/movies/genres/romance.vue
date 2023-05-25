<template>
  <div>
    <navbar/>
    <div class="container">
      <h1 style="color: white; margin: 20px;" >로맨스</h1>
      <div class="row row-cols-md-4">
        <romanceItem v-for="movie in romanceMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";
import romanceItem from '@/components/movies/genres/romanceItem.vue'

export default {
  name: "romancePage",
  components: {
    navbar,
    romanceItem
  },
  mounted() {
    this.getRomanceMovieList();
  },
  computed: {
    romanceMovieList() {
      return this.$store.state.romanceMovieList;
    },
  },
  methods: {
    getRomanceMovieList() {
      this.$store.dispatch("getRomanceMovieList");
    },
  },
};
</script>

<style>

</style>
