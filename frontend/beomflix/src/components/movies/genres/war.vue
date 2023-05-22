<template>
  <div>
    <navbar />
    <div class="container">
      <h1>전쟁</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in warMovieList" :key="movie.id">
          {{ movie }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";

export default {
  name: "warPage",
  components: {
    navbar,
  },
  mounted() {
    this.getWarMovieList();
  },
  computed: {
    warMovieList() {
      return this.$store.state.warMovieList;
    },
  },
  methods: {
    getWarMovieList() {
      this.$store.dispatch("getWarMovieList");
    },
  },
};
</script>

<style>
h1 {
  color: white;
}
</style>
