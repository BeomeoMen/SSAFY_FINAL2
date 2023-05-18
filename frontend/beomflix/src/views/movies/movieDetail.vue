<template>
  <div>
    <img :src="poster+movieDetail.poster_path" >  
    <h2>{{ movieDetail.title }}</h2>
    <p>{{ movieDetail.overview }}</p>
    <p>{{ movieDetail.vote_average }}</p>
    <!-- <p>{{ movieDetail.genres }}</p> -->
    <p>
      장르 : 
      <span v-for="genre in movieDetail.genres" :key="genre.id">{{ genre }}</span>
    </p>
    <p>
      주연 배우 : 
      <span v-for="actor in movieDetail.actors" :key="actor.id">{{ actor }}</span>
    </p>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "movieDetail",
  computed:{
    ...mapState(['movieDetail'])
  },
  data(){
    return{
      poster: 'https://image.tmdb.org/t/p/original/'
    }
  },
}
</script>

<style scoped>
  div{
    color: white;
  }
  img{
    width: 500px;
    height: 800px;
  }
</style>