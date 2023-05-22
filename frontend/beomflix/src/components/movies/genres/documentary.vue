<template>
  <div>
    <navbar/>
    <div class="container">
      <h1>다큐멘터리</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in documentaryMovieList" :key="movie.id">
          {{ movie }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'

export default {
  name:"documentaryPage",
  components:{
    navbar
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
h1 {
  color: white;
}
</style>
