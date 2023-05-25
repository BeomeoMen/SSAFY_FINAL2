<template>
  <div>
    <navbar/>
    <div class="container">
      <h1 style="color: white; margin: 20px;" >역사</h1>
      <div class="row row-cols-md-4">
        <historyItem v-for="movie in historyMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import historyItem from '@/components/movies/genres/historyItem.vue'

export default {
  name: "historyPage",
  components:{
    navbar,
    historyItem
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

</style>
