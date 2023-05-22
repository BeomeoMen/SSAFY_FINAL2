<template>
  <div>
    <navbar />
    <div class="container">
      <h1>로맨스</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in romanceMovieList" :key="movie.id">
          {{ movie }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";

export default {
  name: "romancePage",
  components: {
    navbar,
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
h1 {
  color: white;
}
</style>
