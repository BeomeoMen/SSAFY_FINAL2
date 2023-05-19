<template>
<div class="container">
    <div class="row row-cols-md-4">
      <searchResults v-for="searchResult in searchList" :key="searchResult.id" :searchResult="searchResult"/>
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
      console.log(this.$store.state.searchResults)
      return this.$store.state.searchResults;
    }
  }
}
</script>

<style>

</style>