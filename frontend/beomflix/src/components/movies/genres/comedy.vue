<template>
  <div>
    <navbar/>
  <div class="container">
    <h1>개그</h1>
    <div class="row row-cols-md-4">
      <div v-for="movie in comedyMovieList" :key="movie.id">
        {{ movie }}
      </div>
    </div>
  </div>
</div>

</template>

<script>
import navbar from '@/components/common/navbar.vue'

export default {
  name:"comedyPage",
  components:{
    navbar
  },
  mounted() {
    this.getComedyMovieList();
  },
  computed: {
    comedyMovieList() {
      return this.$store.state.comedyMovieList;
    },
  },
  methods: {
    getComedyMovieList() {
      this.$store.dispatch("getComedyMovieList");
    },
  },
};
</script>

<style>
h1 {
  color: white;
}
</style>