<template>
  <div>
  <navbar/>
  <div class="movie-detail">
    <div class="content-container">
      <div class="image-container">
        <img :src="poster + movieDetail.poster_path">
      </div>
      <div class="details-container">
        <iframe frameborder="0" allowfullscreen style="width: 100%; height: 400px;" :src="trailerUrlPath"></iframe>
        <h2>{{ movieDetail.title }}</h2>
        <div class="details-row">
          <p>
            장르 : 
            <span v-for="genre in movieDetail.genres" :key="genre.id">{{ genre.name }} | </span>
          </p>
          <p>평점 : {{ movieDetail.vote_average }}</p>
          <p>개봉일 : {{ movieDetail.release_date }}</p>
        </div>
        <p >
          주연 배우 : 
          <span class="actor" v-for="actor in movieDetail.actors" :key="actor.id">{{ actor.name }}</span>
        </p>
        <p class="overview">{{ movieDetail.overview }}</p>
      </div>
    </div>
    <div class="review">
      <reviewList :reviews="reviews" />
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import navbar from '@/components/common/navbar.vue'
import reviewList from '@/components/comments/reviewList.vue'
export default {
  components: { 
    navbar,
    reviewList
   },
  name: "movieDetail",
  computed:{
    ...mapState(
      ['movieDetail',
      'reviews']
      )
  },
  mounted(){
    this.getReview()
  },
  data(){
    return{
      poster: 'https://image.tmdb.org/t/p/original/',
      trailerUrlPath: this.$store.state. trailerPath
    }
  },
  methods:{
    getReview(){
      const movieId = this.$store.state.movieDetail.id
      console.log(movieId)
      this.$store.dispatch('getReviews', movieId)
    }
  }
}
</script>

<style scoped>
.movie-detail {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px;
}
.content-container {
  display: flex;
  width: auto;
}
.review{
  color: white;
  border: solid 1px white;
  width: auto;

}
.image-container {
  margin-right: 20px;
  color: white;
}
.image-container img {
  width: 500px;
  height: auto;
}
.details-container {
  color: white;
  border: solid 1px white;
  padding: 20px;
  height: auto;
}
.details-row {
  display: flex;
  margin-bottom: 10px;
}
.details-row p{
  padding-right: 30px;
}
.actor{
  padding-right: 20px;
}
.review{
  display: flex;
}
</style>
