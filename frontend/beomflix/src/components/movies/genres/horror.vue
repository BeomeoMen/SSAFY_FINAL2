<template>
  <div>
    <navbar />
    <div class="container">
      <h1>공포</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in horrorMovieList" :key="movie.id">
          {{ movie }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";

export default {
  name: "horrorPage",
  components: {
    navbar,
  },
  mounted() {
    this.getHorrorMovieList();
  },
  computed: {
    horrorMovieList() {
      return this.$store.state.horrorMovieList;
    },
  },
  methods: {
    getHorrorMovieList() {
      this.$store.dispatch("getHorrorMovieList");
    },
  },
};
</script>

<style>
h1 {
  color: white;
}
</style>
