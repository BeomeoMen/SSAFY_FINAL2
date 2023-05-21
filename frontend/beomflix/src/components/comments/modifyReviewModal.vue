<template>
  <!-- Modal -->
  <div class="modal fade" id="modifyReviewModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-black" id="exampleModalLabel">리뷰 수정</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-dark-emphasis mt-2 mb-2">
        <form @submit.prevent="modifyReview">
          <label for="content"></label>
          <p>{{ review }}</p>
          <input v-model="content" class="inputReview" type="text" id="content" placeholder="리뷰를 입력해주세요">
          <div class="rating">
            <input type="radio" id="star5" name="rating" value="5" v-model="rank" /><label for="star5" title="5 stars"></label>
            <input type="radio" id="star4" name="rating" value="4" v-model="rank" /><label for="star4" title="4 stars"></label>
            <input type="radio" id="star3" name="rating" value="3" v-model="rank" /><label for="star3" title="3 stars"></label>
            <input type="radio" id="star2" name="rating" value="2" v-model="rank" /><label for="star2" title="2 stars"></label>
            <input type="radio" id="star1" name="rating" value="1" v-model="rank" /><label for="star1" title="1 star"></label>
          </div>
          <input type="submit" id="submit" value="수정" data-bs-dismiss="modal">
        </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"modifyReviewModal",
  props: ['reviewId'],
  data(){
    return{
      content : null,
      rank : null
    }
  },
  methods: {
    modifyReview(){
      const content = this.content
      const rank = 3
      const reviewId = this.reviewId
      console.log(reviewId, content)
      if(!content){
        alert('리뷰를 입력해주세요')
        return
      }
      if(!rank){
        alert('별점을 선택해주세요')
        return
      }
      this.$store.dispatch('modifyReview', {reviewId, content, rank})
      this.content = null;
      this.rank = null;
    },
  }

}
</script>

<style>
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