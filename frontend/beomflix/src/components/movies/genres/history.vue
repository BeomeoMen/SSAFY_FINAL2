<template>
  <div>
    <navbar />
    <div class="container">
      <h1>역사</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in historyMovieList" :key="movie.id">
          {{ movie }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'

export default {
  name: "historyPage",
  components:{
    navbar
  },
  mounted() {
    this.getHistoryMovieList();
  },
  computed: {
    historyMovieList() {
      return this.$store.state.historyMovieList;
    },
  },
  methods: {
    getHistoryMovieList() {
      this.$store.dispatch("getHistoryMovieList");
    },
  },
};
</script>

<style>
h1 {
  color: white;
}
</style>
