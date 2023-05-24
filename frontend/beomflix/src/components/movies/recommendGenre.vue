<template>
  <div>
    <div class="container">
      <h1>추천 영화</h1>
      <div class="row row-cols-md-4">
        <recommendGenreItem v-for="movie in recommendGenre" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import recommendGenreItem from '@/components/movies/recommendGenreItem.vue'
export default {
  name:"recommendGenre",
  components:{
    recommendGenreItem,
  },
  mounted() {
    this.getRecommendGenre();
  },
  computed: {
    recommendGenre() {
      return this.$store.state.recommendGenre;
    },
  },
  methods: {
    getRecommendGenre() {
      this.$store.dispatch("getRecommendGenre");
    },
  },
}
</script>

<style scoped>
  h1{
    color: white;
    text-align: center;
  }
</style>