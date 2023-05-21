<template>
  <div>
    <navbar />
    <div class="container">
      <h1>SF</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in sciencefictionMovieList" :key="movie.id">
          {{ movie }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";

export default {
  name: "seiencefictionPage",
  components: {
    navbar,
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
h1 {
  color: white;
}
</style>
