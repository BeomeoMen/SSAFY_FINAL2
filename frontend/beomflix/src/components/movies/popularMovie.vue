<template>
  <div>
    <div class="container">
      <h1>인기작</h1>
      <div class="row row-cols-md-4">
        <popularMovieItem v-for="movie in popularMovie" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import popularMovieItem from '@/components/movies/popularMovieItem.vue'
export default {
  name:"popularMovie",
  components:{
    popularMovieItem,
  },
  mounted() {
    this.getPopluarMovie();
  },
  computed: {
    popularMovie() {
      return this.$store.state.popularMovie;
    },
  },
  methods: {
    getPopluarMovie() {
      this.$store.dispatch("getPopluarMovie");
    },
  },
}
</script>

<style scoped>

  h1{
    color: white;
    text-align: center;
    margin-bottom: 50px;
  }
</style>