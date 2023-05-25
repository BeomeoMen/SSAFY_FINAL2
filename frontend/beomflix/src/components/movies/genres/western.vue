<template>
  <div>
    <navbar/>
    <div class="container">
      <h1 style="color: white; margin: 20px;" >서부</h1>
      <div class="row row-cols-md-4">
        <westernItem v-for="movie in westernMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>


<script>
import navbar from "@/components/common/navbar.vue";
import westernItem from '@/components/movies/genres/westernItem.vue'
export default {
  name: "westernPage",
  components: {
    navbar,
    westernItem
  },
  mounted() {
    this.getWesternMovieList();
  },
  computed: {
    westernMovieList() {
      return this.$store.state.westernMovieList;
    },
  },
  methods: {
    getWesternMovieList() {
      this.$store.dispatch("getWesternMovieList");
    },
  },
};
</script>

<style>
  
</style>
