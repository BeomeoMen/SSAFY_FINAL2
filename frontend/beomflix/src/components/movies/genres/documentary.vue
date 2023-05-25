<template>
  <div>
    <navbar/>
    <div class="container">
      <h1 style="color: white; margin: 20px;" >다큐멘터리</h1>
      <div class="row row-cols-md-4">
        <documentaryItem v-for="movie in documentaryMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import documentaryItem from '@/components/movies/genres/documentaryItem.vue'

export default {
  name:"documentaryPage",
  components:{
    navbar,
    documentaryItem
  },
  mounted() {
    this.getDocumentaryMovieList();
  },
  computed: {
    documentaryMovieList() {
      return this.$store.state.documentaryMovieList;
    },
  },
  methods: {
    getDocumentaryMovieList() {
      this.$store.dispatch("getDocumentaryMovieList");
    },
  },
};
</script>

<style>

</style>
