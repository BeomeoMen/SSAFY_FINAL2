<template>
  <div>
    <h1>리뷰</h1>
    <form @submit.prevent="createReview">
        <label for="content"></label>
        <input v-model="content" class="inputReview" type="text" id="content" placeholder="리뷰를 입력해주세요">
        <label for="rank"></label>
        <input v-model="rank" class="inputRank" type="number" id="rank" placeholder="점수를 입력해주세요 (1~5)">
        <input type="submit" id="submit" value="작성">
      </form>
    <div v-if="reviews.length > 0">
      <reviewListItem v-for="review in reviews" :key="review.id" :review="review" />
    </div>
    <div v-else>아직 리뷰가 없습니다.</div>
  </div>
</template>

<script>
import reviewListItem from '@/components/comments/reviewListItem.vue'

export default {
  name:"reviewList",
  props:{
    reviews: Array
  },
  components: {
    reviewListItem
  },
  data(){
    return{
      content: null,
      rank: null,
    }
  },
  computed:{
    reviewList() {
      return this.$store.state.reviewList
    }
  },
  methods:{
    createReview() {
      const content = this.content
      const rank = this.rank
      const movieId = this.$store.state.movieDetail.id
      if(!content){
        alert('리뷰를 입력해주세요')
        return
      }
      if(!rank){
        alert('점수를 입력해주세요')
        return
      }
      this.$store.dispatch('createReview', {content, rank, movieId})
      this.content = null
      this.rank = null
    }
  }
}
</script>

<style>
  .inputReview{
    margin: 10px;
    /* width: auto; */
    /* height: 50px; */
  }
</style>
