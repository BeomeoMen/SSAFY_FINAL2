<template>
  <div>
    <navbar />
    <div class="movie-detail">
      <div class="content-container">
        <div class="image-container">
          <img :src="poster + movieDetail.poster_path" />
        </div>
        <div class="details-container">
          <iframe frameborder="0" allowfullscreen style="width: 100%; height: 400px" :src="trailerUrlPath +movieDetail.youtube_key +`?autoplay=1&mute=1&amp;playlist=${movieDetail.youtube_key}&loop=1&controls=0&modestbranding=1`" ></iframe>
          <div class="details-row">
            <h2>{{ movieDetail.title }}</h2>
            <div class="like-buttons">
              <i class="bi bi-heart fa-xl" style="color: rgb(0, 123, 255)" v-if="!isLikeMovie"  @click="likeMovie"></i>
              <i class="bi bi-heart-fill fa-xl" style="color: rgb(0, 123, 255)" v-if="isLikeMovie" @click="likeMovie"></i>
            </div>
          </div>
          <p>장르 : <span v-for="genre in movieDetail.genres" :key="genre.id" >{{ genre.name }} |</span> </p>
          <p>평점 : {{ movieDetail.vote_average }}</p>
          <p>개봉일 : {{ movieDetail.release_date }}</p>
          <p>
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
import { mapState } from "vuex";
import navbar from "@/components/common/navbar.vue";
import reviewList from "@/components/comments/reviewList.vue";
import axios from "axios";
const API_URL = "http://127.0.0.1:8000";
export default {
  components: {
    navbar,
    reviewList,
  },
  name: "movieDetail",
  computed: {
    ...mapState({
      movieDetail: "movieDetail",
      reviews: "reviews",
      user: "userId",
      movieLike: "movieLike",
    }),
    isLikeMovie() {
      console.log(this.isLikedMovie)
      return this.isLikedMovie;
    }
  },
  mounted() {
    this.getReview();
    this.getLikeMovie();
  },
  data() {
    return {
      isLikedMovie : false,
      poster: "https://image.tmdb.org/t/p/original/",
      trailerUrlPath: "https://www.youtube.com/embed/",
    };
  },
  methods: {
    getReview() {
      const movieId = this.$store.state.movieDetail.id;
      this.$store.dispatch("getReviews", movieId);
    },
    likeMovie(){
      const movieId = this.$store.state.movieDetail.id;
      this.$store.dispatch('likeMovie', movieId)
      location.reload()

    },
    getLikeMovie(){
      const userId = this.$store.state.userId;
      axios({
        method: 'get',
        url: `${API_URL}/movies/${userId}/liked_movies/`,
        headers: {
          Authorization: `Token ${this.$store.state.token.key}`,
        }
      })
      .then((res)=>{
        this.movieLikes = res.data.filter(movie => {
          return movie.id == this.movieDetail.id
        });
        // console.log(this.movieLikes)
        this.movieLikes = this.movieLikes[0].id
        if (this.movieLikes == this.movieDetail.id){
          this.isLikedMovie = true
          // console.log(this.isLikedMovie)
        }
        else{
          this.isLikedMovie = false
          // console.log(this.isLikedMovie)
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    },
  },
};
</script>

<style scoped>
.movie-detail {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  width: 100%;
  max-width: 1500px;
}
.content-container {
  display: flex;
  width: auto;
}
p{
  font-size: 18px;
}
.image-container {
  margin-right: 20px;
  color: white;
}
.image-container img {
  width: 500px;
  height: 850px;
}
.details-container {
  color: white;
  background-color: rgba(128, 128, 128, 0.09);
  padding: 20px;
  height: auto;
}
.details-row {
  display: flex;
  /* justify-content: space-between; */
  margin-bottom: 10px;
  align-items: center;
}
.details-row h2 {
  margin-bottom: 0;
}
.like-buttons {
  display: flex;
  padding: 20px;
  align-items: center;
}
.actor {
  padding-right: 20px;
}
.review {
    display: flex;
    width: 100%;
    height: 100%;
    color: white;
    background-color: rgba(128, 128, 128, 0.09);
    border-radius: 10px;
    /* justify-content: center; */
    margin-top: 20px;
  }
</style>