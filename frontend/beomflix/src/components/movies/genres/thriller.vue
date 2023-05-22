<template>
  <div>
    <navbar />
    <div class="container">
      <h1>스릴러</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in thrillerMovieList" :key="movie.id">
          {{ movie }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";

export default {
  name: "thrillerPage",
  components: {
    navbar,
  },
  mounted() {
    this.getThrillerMovieList();
  },
  computed: {
    thrillerMovieList() {
      return this.$store.state.thrillerMovieList;
    },
  },
  methods: {
    getThrillerMovieList() {
      this.$store.dispatch("getThrillerMovieList");
    },
  },
};
</script>

<style>
h1 {
  color: white;
}
</style>
