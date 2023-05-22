<template>
  <div>
    <navbar/>
    <div class="container">
      <h1>가족</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in familyMovieList" :key="movie.id">
          {{ movie }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'

export default {
  name:"familyPage",
  components:{
    navbar
  },
  mounted() {
    this.getFamilyMovieList();
  },
  computed: {
    familyMovieList() {
      return this.$store.state.familyMovieList;
    },
  },
  methods: {
    getFamilyMovieList() {
      this.$store.dispatch("getFamilyMovieList");
    },
  },
};
</script>

<style>
h1 {
  color: white;
}
</style>
