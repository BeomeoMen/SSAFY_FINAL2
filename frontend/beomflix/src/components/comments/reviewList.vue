<template>
  <div>
    <h1>리뷰</h1>
    <form @submit.prevent="createReview">
      <label for="content"></label>
      <input v-model="content" class="inputReview" type="text" id="content" placeholder="리뷰를 입력해주세요">
      <div class="rating">
        <input type="radio" id="star5" name="rating" value="5" v-model="rank" /><label for="star5" title="5 stars"></label>
        <input type="radio" id="star4" name="rating" value="4" v-model="rank" /><label for="star4" title="4 stars"></label>
        <input type="radio" id="star3" name="rating" value="3" v-model="rank" /><label for="star3" title="3 stars"></label>
        <input type="radio" id="star2" name="rating" value="2" v-model="rank" /><label for="star2" title="2 stars"></label>
        <input type="radio" id="star1" name="rating" value="1" v-model="rank" /><label for="star1" title="1 star"></label>
      </div>
      <input class="btn btn-primary" type="submit" id="submit" value="작성">
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
    reviewListItem,
  },
  data(){
    return{
      content: null,
      rank: null,
    }
  },
  computed:{
    reviewList() {
      return this.$store.state.reviews
    }
  },
  methods:{
    createReview() {
      const user = this.$store.state.userId
      const content = this.content
      const rank = this.rank
      if(!content){
        alert('리뷰를 입력해주세요')
        return
      }
      if(!rank){
        alert('별점을 선택해주세요')
        return
      }
      this.$store.dispatch('createReview', {user, content, rank})
      this.content = null
      this.rank = null
    }
  }
}
</script>

<style scoped>
.rating {
  direction: rtl;
}
.rating input {
  display: none;
}
.rating label {
  font-size: 1.5em;
  color: #ffd700;
  cursor: pointer;
  margin-right: 20px;
}
.rating label:before {
  content: "☆";
  position: absolute;
}
.rating input:checked ~ label:before {
  content: "★";
}
</style>
