<template>
  <div>
    <navbar/>
    <div class="container">
      <h1 style="color: white; margin: 20px;" >드라마</h1>
      <div class="row row-cols-md-4">
        <dramaItem v-for="movie in dramaMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import dramaItem from '@/components/movies/genres/dramaItem.vue'

export default {
  name:"dramaPage",
  components:{
    navbar,
    dramaItem
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

</style>
