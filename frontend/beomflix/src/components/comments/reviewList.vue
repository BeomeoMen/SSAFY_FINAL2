<template>
  <div class="review-wrapper">
    <div class="review-creation">
      <h2 style="font-size: 30px; margin-top: 20px;">리뷰</h2>
      <form @submit.prevent="createReview">
        <div class="textarea-container">
          <textarea v-model="content" cols="53" rows="5"></textarea>
          <div class="rating">
            <input type="radio" id="star1" name="rating" value="1" v-model="rank" /><label for="star1" title="1 star"></label>
            <input type="radio" id="star2" name="rating" value="2" v-model="rank" /><label for="star2" title="2 stars"></label>
            <input type="radio" id="star3" name="rating" value="3" v-model="rank" /><label for="star3" title="3 stars"></label>
            <input type="radio" id="star4" name="rating" value="4" v-model="rank" /><label for="star4" title="4 stars"></label>
            <input type="radio" id="star5" name="rating" value="5" v-model="rank" /><label for="star5" title="5 stars"></label>
          </div>
          <input class="btn btn-primary" type="submit" id="submit" value="작성">
        </div>
      </form>
    </div>

    <div class="review-list">
      <div v-if="reviews.length > 0">
        <reviewListItem v-for="review in reviews" :key="review.id" :review="review" />
      </div>
      <div v-else style="font-size: 30px; margin-top: 20px;">아직 리뷰가 없습니다.</div>
    </div>
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
    },
    isFollowedByCurrentUser() {
      return this.getFollowers.some(follower => follower.id === this.userId);
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
  font-size:1.5em;
  color: #ffd900dc;
  cursor: pointer;
  margin-top: 100px;
}
.rating label:before {
  content: "☆";
}
.rating input:checked ~ label:before {
  content: "★";
}
.textarea-container {
  position: relative;
}

.textarea-container textarea {
  background-color: rgba(128, 128, 128, 0.319);
  border-radius: 10px;
  color: white;
  padding: 20px;
}

.textarea-container .rating {
  position: absolute;
  right: 10px;
  bottom: 60px;
}
.textarea-container #submit{
  position: absolute;
  width: 120px;
  right: 15px;
  bottom: 20px;
}
.review-wrapper {
  display: flex;
  justify-content: space-between;
}

.review-creation {
  flex: 1;
  margin-right: 20px;  /* if needed */
}

.review-list {
  flex: 2;
  overflow-y: auto;
  height: calc(100vh - 50px);  /* Adjust as needed */
}
</style>
