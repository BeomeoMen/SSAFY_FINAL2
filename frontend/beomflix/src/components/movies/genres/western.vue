<template>
  <div>
    <navbar />
    <div class="container">
      <h1>서부</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in westernMovieList" :key="movie.id">
          {{ movie }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";

export default {
  name: "westernPage",
  components: {
    navbar,
  },
  mounted() {
    this.getWesternMovieList();
  },
  computed: {
    westernMovieList() {
      return this.$store.state.westernMovieList;
    },
  },
  methods: {
    getWesternMovieList() {
      this.$store.dispatch("getWesternMovieList");
    },
  },
};
</script>

<style>
h1 {
  color: white;
}
</style>
