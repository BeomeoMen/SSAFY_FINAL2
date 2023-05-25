<template>
  <div>
    <navbar/>
    <div class="container">
      <h1 style="color: white; margin: 20px;" >가족</h1>
      <div class="row row-cols-md-4">
        <familyItem v-for="movie in familyMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import familyItem from '@/components/movies/genres/familyItem.vue'

export default {
  name:"familyPage",
  components:{
    navbar,
    familyItem
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

</style>
