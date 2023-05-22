<template>
  <div class="reviews">
    <h2>유저명 :{{review.user.username}}</h2>
    <h2 v-if="!isEditing">내용 :{{review.content}}</h2>
    <input v-else v-model="editedContent" type="text" placeholder="리뷰를 입력해주세요">
    <h2 v-if="!isEditing">평점 : {{review.rank}}</h2>
    <div v-else class="rating">
      <input type="radio" id="star55" name="rating" value="5" v-model="editedRank" /><label for="star55" title="5 stars"></label>
      <input type="radio" id="star44" name="rating" value="4" v-model="editedRank" /><label for="star44" title="4 stars"></label>
      <input type="radio" id="star33" name="rating" value="3" v-model="editedRank" /><label for="star33" title="3 stars"></label>
      <input type="radio" id="star22" name="rating" value="2" v-model="editedRank" /><label for="star22" title="2 stars"></label>
      <input type="radio" id="star11" name="rating" value="1" v-model="editedRank" /><label for="star11" title="1 star"></label>
    </div>
    <div>
      <a class="btn btn-primary" v-if="isReviewOwner && !isEditing" @click="editReview">수정</a>
      <button class="btn btn-primary" v-if="isReviewOwner && !isEditing" @click="deleteReview">삭제</button>
      <button v-if="!isEditing" class="btn btn-outline-primary" @click="likeReview">
        <i class="bi bi-heart" v-if="!isLiked"></i>
        <i class="bi bi-heart-fill" v-else></i> 좋아요
      </button>
      <a class="btn btn-primary" v-if="isReviewOwner && isEditing" @click="submitEdit">수정 완료</a>
      <a class="btn btn-primary" v-if="isReviewOwner && isEditing" @click="cancelEdit">수정 취소</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "reviewListItem",
  props: {
    review:Object
  },
  data() {
    return {
      isEditing: false,
      editedContent: '',
      editedRank: null,
    }
  },
  computed:{
    ...mapState({
      loginUser: state => state.userId,
      likes: state => state.reviewLikes,
    }),
    isReviewOwner() {
      return this.loginUser === this.review.user.id; 
    },
    reviewId() {
      return this.review.id;
    },
    isLiked() {
      return this.likes[this.review.id] ? this.likes[this.review.id].is_liked : false;
    },
  },
  methods:{  
    deleteReview(){
      this.$store.dispatch('deleteReview', this.review.id)
    },
    likeReview(){
      this.$store.dispatch('likeReview', this.review.id)
    },
    editReview() {
      this.isEditing = !this.isEditing;
      this.editedContent = this.review.content;
      this.editedRank = this.review.rank;
    },
    submitEdit() {
      const id = this.review.id
      const user = this.review.user.id
      const content = this.editedContent
      const rank = this.editedRank
      console.log(id, user, content, rank)
      this.$store.dispatch('modifyReview', {id, user, content, rank});
      this.isEditing = false;
    },
    cancelEdit() {
      this.isEditing = false;
    },
  }
}
</script>

<style scoped>
.reviews{
  margin: 10px;
  border: solid 1px white;
}
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
