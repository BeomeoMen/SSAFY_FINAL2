<template>
  <div>
    <navbar/>
    <div class="container">
      <h1>전쟁</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in warMovieList.movies" :key="movie.id">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/common/navbar.vue";

export default {
  name: "warPage",
  components: {
    navbar,
  },
  data(){
    return{
      poster: 'https://image.tmdb.org/t/p/original/',
      showCard: true,

    }
  },
  mounted() {
    this.getWarMovieList();
  },
  computed: {
    warMovieList() {
      return this.$store.state.warMovieList;
    },
  },
  methods: {
    getWarMovieList() {
      this.$store.dispatch("getWarMovieList");
    },
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
  },
};
</script>

<style scoped>
  .col{
    margin-bottom: 20px;
  }
  .card1{
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
