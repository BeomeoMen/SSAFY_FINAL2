<template>
  <div>
    <navbar />
    <div class="container">
      <h1>TV 영화</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in tvmovieMovieList" :key="movie.id">
          {{ movie }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";

export default {
  name: "tvmoviePage",
  components: {
    navbar,
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
h1 {
  color: white;
}
</style>
