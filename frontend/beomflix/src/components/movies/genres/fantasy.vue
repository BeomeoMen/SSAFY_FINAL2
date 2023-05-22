<template>
  <div>
    <navbar/>  
    <div class="container">
      <h1>판타지</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in fantasyMovieList" :key="movie.id">
          {{ movie }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'

export default {
  name:"fantasyPage",
  components:{
    navbar
  },
  mounted() {
    this.getFantasyMovieList();
  },
  computed: {
    fantasyMovieList() {
      return this.$store.state.fantasyMovieList;
    },
  },
  methods: {
    getFantasyMovieList() {
      this.$store.dispatch("getFantasyMovieList");
    },
  },
};
</script>

<style>
h1 {
  color: white;
}
</style>
