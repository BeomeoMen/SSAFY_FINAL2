<template>
  <div class="reviews">
    <div style="display: flex;">
      <span @click="getUserProfile">
        <h4>작성자: {{ review.user.username }}</h4>
      </span>
      <p style="margin-left: 300px;">
        작성시간: {{ review.created_at | formatDate }}
        수정시간: {{ review.updated_at | formatDate }}
      </p>
    </div>
    <span v-if="!isEditing">평점: <span v-for="star in review.rank" :key="star" class="star">★</span></span>
    <div v-else class="rating">
      <input type="radio" id="star55" name="rating" value="5" v-model="editedRank" /><label for="star55" title="5 stars"></label>
      <input type="radio" id="star44" name="rating" value="4" v-model="editedRank" /><label for="star44" title="4 stars"></label>
      <input type="radio" id="star33" name="rating" value="3" v-model="editedRank" /><label for="star33" title="3 stars"></label>
      <input type="radio" id="star22" name="rating" value="2" v-model="editedRank" /><label for="star22" title="2 stars"></label>
      <input type="radio" id="star11" name="rating" value="1" v-model="editedRank" /><label for="star11" title="1 star"></label>
    </div>
    <div>
      <h5 v-if="!isEditing" style="margin: 20px 0px" class="review-content">내용: {{ review.content }}</h5>
      <textarea v-else v-model="editedContent" cols="100" rows="3" type="text" placeholder="리뷰를 입력해주세요"></textarea>
    </div>
    <div class="buttons-container">
      <span v-if="!isEditing" @click="likeReview">
        <i class="bi bi-heart fa-2xl" v-if="!isLiked" style="color: rgb(0, 123, 255)"></i>
        <i class="bi bi-heart-fill fa-2xl" v-else style="color: rgb(0, 123, 255)"></i>
      </span>
      <span v-if="isEditing" @click="likeReview">
        <i class="bi bi-heart fa-2xl" v-if="!isLiked" style="color: rgb(0, 123, 255)"></i>
        <i class="bi bi-heart-fill fa-2xl" v-else style="color: rgb(0, 123, 255)"></i>
      </span>
      <div>
        <div class="edit-buttons" v-if="isReviewOwner && !isEditing">
          <a class="btn btn-primary" @click="editReview">수정</a>
          <button class="btn btn-primary" @click="deleteReview" style="margin-left: 10px;">삭제</button>
        </div>
        <div class="edit-buttons" v-if="isReviewOwner && isEditing">
          <a class="btn btn-primary" @click="submitEdit">수정 완료</a>
          <a class="btn btn-primary" @click="cancelEdit" style="margin-left: 10px;">수정 취소</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment';
export default {
  name: "reviewListItem",
  props: {
    review:Object
  },
  filters: {
    formatDate(datetime) {
      return moment(datetime).format('YYYY-MM-DD HH:mm');
    },
  },
  data() {
    return {
      isEditing: false,
      editedContent: '',
      editedRank: null,
      likeReviews:[],
    }
  },
  mounted(){
    this.getLikeReview()
  },
  computed:{
    ...mapState({
      loginUser: state => state.userId,
      likes: state => state.reviewLikes,
    }),
    isReviewOwner() {
      return this.loginUser === this.review.user.id; 
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
    getUserProfile() {
      this.$store.dispatch("getUserProfile", this.review.user.id);
    }
  }
}
</script>

<style scoped>
.reviews {
  margin: 10px;
  width: 950px;
  border-radius: 10px;
  background-color: rgba(128, 128, 128, 0.319);
  justify-content: center;
  padding: 20px;
}
.review-content {
  white-space: pre-wrap;
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
.star {
  color: #ffd700;
  font-size: 1.5em;
  margin-right: 5px;
}

textarea {
  background-color: rgba(128, 128, 128, 0.319);
  border-radius: 10px;
  color: white;
  padding: 20px;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
}

.edit-buttons {
  display: flex;
  justify-content: flex-end;
}
</style>