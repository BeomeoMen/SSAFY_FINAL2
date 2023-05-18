<template>
  <div class="movie-list-item">
    <h5>{{ movie.title }}</h5>
    <p>{{ movie.overview }}</p>
  </div>
</template>

<script>
export default {
  name:"movieListItem",
  props:{
    movie:Object,
  }
}
</script>

<style scoped>
  .movie-list-item{
    color:white
  }
</style>
