<template>
<div class="container">
    <div class="row row-cols-md-4">
      <searchResults v-for="movie in searchList" :key="movie.id" :movie="movie"/>
    </div>
  </div>
</template>

<script>
import searchResults from '@/components/movies/searchResults.vue'
export default {
  name:'searchList',
  components:{
    searchResults,
  },
  computed:{
    searchList(){
      return this.$store.state.searchResults;
    }
  }
}
</script>

<style>

</style>