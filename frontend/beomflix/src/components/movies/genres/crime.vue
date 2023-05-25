<template>
  <div>
    <navbar/>
    <div class="container">
      <h1>범죄</h1>
      <div class="row row-cols-md-4">
        <crimeItem v-for="movie in crimeMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import crimeItem from '@/components/movies/genres/crimeItem.vue'

export default {
  name:"crimePage",
  components:{
    navbar,
    crimeItem
  },
  mounted() {
    this.getCrimeMovieList();
  },
  computed: {
    crimeMovieList() {
      return this.$store.state.crimeMovieList;
    },
  },
  methods: {
    getCrimeMovieList() {
      this.$store.dispatch("getCrimeMovieList");
    },
  },
};
</script>

<style>

</style>
