<template>
  <div>
  <navbar/>
  <div class="movie-detail">
    <div class="image-container">
      <img :src="poster + movieDetail.poster_path">
      <p>
        주연 배우 : 
        <span v-for="actor in movieDetail.actors" :key="actor.id">{{ actor }}</span>
      </p>
    </div>
    <div class="details-container">
      <iframe frameborder="0" allowfullscreen style="width: 100%; height: 400px;" :src="trailerUrlPath"></iframe>
      <h2>{{ movieDetail.title }}</h2>
      <div class="details-row">
        <p>
          장르 : 
          <span v-for="genre in movieDetail.genres" :key="genre.id">{{ genre }}</span>
        </p>
        <p>평점 : {{ movieDetail.vote_average }}</p>
        <p>개봉일 : {{ movieDetail.release_date }}</p>
      </div>
      <p>{{ movieDetail.overview }}</p>
    </div>
    <div></div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import navbar from '@/components/common/navbar.vue'
export default {
  components: { navbar },
  name: "movieDetail",
  computed:{
    ...mapState(['movieDetail'])
  },
  data(){
    return{
      poster: 'https://image.tmdb.org/t/p/original/',
      trailerUrlPath: this.$store.state. trailerPath
    }
  },
}
</script>

<style scoped>
.movie-detail {
  display: flex;
  align-items: flex-start;
  margin: 50px;
}

.image-container {
  margin-right: 20px;
  color: white;
}

.image-container img {
  width: 300px;
  height: auto;
}

.details-container {
  color: white;
  border: solid 1px white;
  padding: 20px;
}

.details-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.details-row p {
  flex-basis: 33.33%;
}

</style>
