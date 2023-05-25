<template>
  <div>
    <navbar/>
    <div class="container">
      <h1>전쟁</h1>
      <div class="row row-cols-md-4">
        <warItem v-for="movie in warMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";
import warItem from '@/components/movies/genres/warItem.vue'

export default {
  name: "warPage",
  components: {
    navbar,
    warItem
  },
  mounted() {
    this.getWarMovieList();
  },
  computed: {
    warMovieList() {
      return this.$store.state.warMovieList;
    },
  },
  methods: {
    getWarMovieList() {
      this.$store.dispatch("getWarMovieList");
    },

  },
};
</script>

<style scoped>
 
</style>
