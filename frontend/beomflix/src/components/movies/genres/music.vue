<template>
  <div>
    <navbar />
    <div class="container">
      <h1>음악</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in musicMovieList" :key="movie.id">
          {{ movie }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";

export default {
  name: "musicPage",
  components: {
    navbar,
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
h1 {
  color: white;
}
</style>
