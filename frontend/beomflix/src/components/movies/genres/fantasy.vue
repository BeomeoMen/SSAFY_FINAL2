<template>
  <div>
    <navbar/>
    <div class="container">
      <h1 style="color: white; margin: 20px;" >판타지</h1>
      <div class="row row-cols-md-4">
        <fantasyItem v-for="movie in fantasyMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import fantasyItem from '@/components/movies/genres/fantasyItem.vue'

export default {
  name:"fantasyPage",
  components:{
    navbar,
    fantasyItem
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

</style>
