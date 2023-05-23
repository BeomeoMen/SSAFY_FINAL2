<template>
  <div class="col">
    <div class="card1" @mouseenter="showCard = true" @mouseleave="showCard = false" v-show="!showCard">
      <div class="card-body">
        <h3 class="card-title mt-4" @click="movieDetail(nowMovie.id)">{{nowMovie.title}}</h3>
        <h4>평점 : {{ nowMovie.vote_average }}</h4>
        <h4>인기도 : {{ nowMovie.popularity.toFixed(0) }}</h4>
        <p class="card-text" @click="movieDetail(nowMovie.id)">{{ truncateOverview(nowMovie.overview, 120) }}</p>
        <button class="btn btn-primary text-center" @click="movieDetail(nowMovie.id)">상세보기</button>
      </div>
    </div>
    <div class="card2" @mouseenter="showCard = false" @mouseleave="showCard = true" v-show="showCard">
      <img :src="poster+nowMovie.poster_path" class="card-img-top" @click="movieDetail(nowMovie.id)">  
    </div>
  </div>
</template>

<script>
export default {
  name:"nowMovieListItem.vue",
  props:{
    nowMovie:Object,
  },
  data(){
    return{
      poster: 'https://image.tmdb.org/t/p/original/',
      showCard: true,
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
 .col{
  margin-bottom: 20px;
 }
  .card{
    margin-bottom: 20px;
    height: 400px;
    border-radius: 30px;
  }
  .card-body{
    background-color: black;
    color: white;
    padding: 20px;
  }
  .card2{
    margin-bottom: 20px;
    height: 400px;
    border-radius: 30px;
  }
  .card-body > .card-title{
    text-align: center;
  }
  img{
    height: 400px;
  }
</style>
