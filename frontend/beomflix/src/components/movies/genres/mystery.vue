<template>
  <div>
    <navbar />
    <div class="container">
      <h1>미스테리</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in mysteryMovieList" :key="movie.id">
          {{ movie }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'

export default {
  name: "mysteryPage",
  components: {
    navbar,
  },
  mounted() {
    this.getMysteryMovieList();
  },
  computed: {
    mysteryMovieList() {
      return this.$store.state.mysteryMovieList;
    },
  },
  methods: {
    getMysteryMovieList() {
      this.$store.dispatch("getMysteryMovieList");
    },
  },
};
</script>

<style>
h1 {
  color: white;
}
</style>
