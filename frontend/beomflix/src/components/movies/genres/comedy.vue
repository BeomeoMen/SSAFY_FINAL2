<template>
  <div>
    <navbar/>
    <div class="container">
      <h1>개그</h1>
      <div class="row row-cols-md-4">
        <comedyItem v-for="movie in comedyMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import comedyItem from '@/components/movies/genres/comedyItem.vue'

export default {
  name:"comedyPage",
  components:{
    navbar,
    comedyItem
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

</style>