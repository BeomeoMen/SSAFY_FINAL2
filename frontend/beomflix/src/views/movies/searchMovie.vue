<template>
  <div>
    <navbar/>
    <searchList/>
  </div>
</template>

<script>
import searchList from '@/components/movies/searchList.vue'
import navbar from '@/components/common/navbar.vue'
export default {
  name:"searchMovie",
  components:{
    searchList,
    navbar
  }
}
</script>

<style>

</style>