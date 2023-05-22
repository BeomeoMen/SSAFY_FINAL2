<template>
  <div>
    <navbar/>
    <div class="container">
      <h1>애니메이션</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in animationMovieList.movies" :key="movie.id">
          <div class="col">
            <div class="card" style="width: 18rem;">
              <img :src="poster+movie.poster_path" class="card-img-top" @click="movieDetail(movie.id)">  
              <div class="card-body">
                <h4 class="card-title" @click="movieDetail(movie.id)">{{movie.title}}</h4>
                <p class="card-text" @click="movieDetail(movie.id)">{{ truncateOverview(movie.overview, 100) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'

export default {
  name:"animationPage",
  components:{
    navbar
  },
  data(){
    return{
      poster: 'https://image.tmdb.org/t/p/original/'
    }
  },
  mounted() {
    this.getAnimationMovieList();
  },
  computed: {
    animationMovieList() {
      return this.$store.state.animationMovieList;
    },
  },
  methods: {
    getAnimationMovieList() {
      this.$store.dispatch("getAnimationMovieList");
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

<style>
h1 {
  color: white;
}
</style>