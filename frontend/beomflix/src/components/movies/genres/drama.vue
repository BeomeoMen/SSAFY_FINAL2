<template>
  <div>
    <navbar/>
    <div class="container">
      <h1>드라마</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in dramaMovieList" :key="movie.id">
          {{ movie }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'

export default {
  name:"dramaPage",
  components:{
    navbar
  },
  mounted() {
    this.getDramaMovieList();
  },
  computed: {
    dramaMovieList() {
      return this.$store.state.dramaMovieList;
    },
  },
  methods: {
    getDramaMovieList() {
      this.$store.dispatch("getDramaMovieList");
    },
  },
};
</script>

<style>
h1 {
  color: white;
}
</style>
