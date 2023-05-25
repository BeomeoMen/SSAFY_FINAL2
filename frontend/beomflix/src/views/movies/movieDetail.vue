<template>
  <div>
    <navbar />
    <div class="movie-detail">
      <div class="content-container">
        <div class="image-container">
          <img :src="poster + movieDetail.poster_path" />
        </div>
        <div class="details-container">
          <iframe
            frameborder="0"
            allowfullscreen
            style="width: 100%; height: 400px"
            :src="
              trailerUrlPath +
              movieDetail.youtube_key +
              `?autoplay=1&mute=1&amp;playlist=${movieDetail.youtube_key}&loop=1&controls=0&modestbranding=1`
            "
          ></iframe>
          <div class="details-row">
            <h2>{{ movieDetail.title }}</h2>
            <div class="like-buttons">
              <i
                class="fa-solid fa-thumbs-up fa-2xl"
                @click="likeMovie"
                style="color: rgb(0, 123, 255)"
              ></i>
              <span style="width: 15px;"></span>
              <i
                class="fa-regular fa-thumbs-up fa-2xl"
                @click="likeMovie"
                style="color: rgb(0, 123, 255)"
              ></i>
            </div>
          </div>
          <p>
            장르 :
            <span v-for="genre in movieDetail.genres" :key="genre.id"
              >{{ genre.name }} |
            </span>
          </p>
          <p>평점 : {{ movieDetail.vote_average }}</p>
          <p>개봉일 : {{ movieDetail.release_date }}</p>
          <p>
            주연 배우 :
            <span
              class="actor"
              v-for="actor in movieDetail.actors"
              :key="actor.id"
              >{{ actor.name }}</span
            >
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
      user: "user/userId",
      movieLikes: "movieLikes",
    }),
    // likeCheck() {
    //   const movieId = this.movieDetail.id;
    //   return this.movieLikes[movieId]?.is_liked || false;
    // }

    // this.movieLikes[this.movieDetail.id].is_liked = !this.movieLikes[this.movieDetail.id].is_liked
    // poster: function () {
    //   return 'https://image.tmdb.org/t/p/original';
    // },
    // trailerUrlPath: function () {
    //   return 'https://www.youtube.com/embed/';
    // },
  },
  mounted() {
    this.getReview();
  },
  data() {
    return {
      poster: "https://image.tmdb.org/t/p/original/",
      trailerUrlPath: "https://www.youtube.com/embed/",
    };
  },
  methods: {
    getReview() {
      const movieId = this.$store.state.movieDetail.id;
      this.$store.dispatch("getReviews", movieId);
    },
    likeMovie() {
      this.$store.dispatch("likeMovie", this.movieDetail.id);
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
  /* border: solid 1px white; */
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
    color: white;
    background-color: rgba(128, 128, 128, 0.145);
    border-radius: 10px;
    justify-content: center;
  }
</style>