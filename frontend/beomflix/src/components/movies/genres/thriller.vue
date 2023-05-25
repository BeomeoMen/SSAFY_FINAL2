<template>
  <div>
    <navbar/>
    <div class="container">
      <h1 style="color: white; margin: 20px;" >스릴러</h1>
      <div class="row row-cols-md-4">
        <thrillerItem v-for="movie in thrillerMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";
import thrillerItem from "@/components/movies/genres/thrillerItem.vue"
export default {
  name: "thrillerPage",
  components: {
    navbar,
    thrillerItem
  },
  mounted() {
    this.getThrillerMovieList();
  },
  computed: {
    thrillerMovieList() {
      return this.$store.state.thrillerMovieList;
    },
  },
  methods: {
    getThrillerMovieList() {
      this.$store.dispatch("getThrillerMovieList");
    },
  },
};
</script>

<style>

</style>
