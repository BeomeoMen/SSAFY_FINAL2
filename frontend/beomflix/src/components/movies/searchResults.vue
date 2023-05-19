<template>
  <div class="col">
    <div class="card" style="width: 18rem;">
      <img :src="poster+searchResult.poster_path" class="card-img-top" @click="movieDetail(searchResult.id)">  
      <div class="card-body">
        <h4 class="card-title" @click="movieDetail(searchResult.id)">{{searchResult.title}}</h4>
        <p class="card-text" @click="movieDetail(searchResult.id)">{{ truncateOverview(searchResult.overview, 100) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"searchResults",
  props: {
    searchResult:[],
  },
  data(){
    return{
      poster: 'https://image.tmdb.org/t/p/original/'
    }
  },
  methods: {
    truncateOverview(overview, maxLength) {
      if (overview && overview.length > maxLength) {
        return overview.slice(0, maxLength) + '...'
      } else if (!overview) {
        return '줄거리가 없습니다.'
      } else {
        return overview
      }
    },
    movieDetail(movieId) {
      this.$store.dispatch('getMovieDetail', movieId);
    } 
  }
}
</script>

<style scoped>
  .card{
    margin-bottom: 20px;
  }
  .card-body{
    background-color: black;
    color: white;
  }
  .card-body > .card-title{
    text-align: center;
  }
</style>

