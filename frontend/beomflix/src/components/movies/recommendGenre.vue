<template>
  <div>
    <div class="container">
      <h2>추천 영화</h2>
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
  h2{
    color: white;
    text-align: center;
    margin-bottom: 50px;
  }
</style>