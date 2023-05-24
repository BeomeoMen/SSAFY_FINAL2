<template>
  <div class="col">
    <div class="card1" @click="showCard = !showCard" v-show="!showCard">
      <div class="card-body">
        <h3 class="card-title mt-4" >{{movie.title}}</h3>
        <h4>평점 : {{ movie.vote_average }}</h4>
        <h4>인기도 : {{ movie.popularity.toFixed(0) }}</h4>
        <p class="card-text">{{ truncateOverview(movie.overview, 120) }}</p>
        <button class="btn btn-primary" @click="movieDetail(movie.id)">상세보기</button>
      </div>
    </div>
    <div class="card2" @click="showCard = !showCard" v-show="showCard">
      <img :src="poster+movie.poster_path" class="card-img-top" >  
    </div>
  </div>
</template>

<script>
export default {
  name:"nowMovieListItem.vue",
  props:{
    movie:Object,
  },
  data(){
    return{
      poster: 'https://image.tmdb.org/t/p/original',
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
