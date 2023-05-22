<template>
  <div>
    <navbar/>  <div class="container">
    <h1>범죄</h1>
    <div class="row row-cols-md-4">
      <div v-for="movie in crimeMovieList" :key="movie.id">
        {{ movie }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'

export default {
  name:"crimePage",
  components:{
    navbar
  },
  mounted() {
    this.getCrimeMovieList();
  },
  computed: {
    crimeMovieList() {
      return this.$store.state.getCrimeMovieList;
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
h1 {
  color: white;
}
</style>
