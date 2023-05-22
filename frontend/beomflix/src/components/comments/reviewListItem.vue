<template>
  <div class="reviews">
    <h2>userId : {{ review.user.id }}</h2>
    <h2>review Id : {{ review.id }}</h2>
    <h2>유저명 :{{review.user.username}}</h2>
    <h2>평점 : {{review.rank}}</h2>
    <h2>내용 :{{review.content}}</h2>
    <a class="btn btn-primary" v-if="isReviewOwner" href="#modifyReviewModal" data-bs-toggle="modal" >수정</a>
    <modifyReviewModal :reviewId="reviewId" />
    <h2>{{ reviewId }}</h2>
    <button class="btn btn-primary" v-if="isReviewOwner" @click="deleteReview">삭제</button>
    <button class="btn btn-outline-primary" @click="likeReview"><i class="bi bi-heart"></i>좋아요</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import modifyReviewModal from '@/components/comments/modifyReviewModal.vue'
export default {
  name: "reviewListItem",
  props: {
    review:Object
  },
  components:{
    modifyReviewModal
  },
  computed:{
    ...mapState({
      loginUser: state => state.userId,
      likes: state => state.likes,
    }),
    isReviewOwner() {
      return this.loginUser === this.review.user.id; 
    },
    reviewId() {
      console.log(this.review.id)
      return this.review.id;
    },
    // isLiked() {
    // return this.likes[this.review.id]?.is_liked || false;
    // },
    // likeCount() {
      // return this.likes[this.review.id]?.count || 0;
    // },
  },
  methods:{
    // modifyReview(){
    //   console.log('수정')
    //   console.log(this.reviewId)
    // },  
    deleteReview(){
      this.$store.dispatch('deleteReview', this.review.id)
    },
    likeReview(){
      this.$store.dispatch('likeReview', this.review.id)
    }
  }
}
</script>

<style scoped>
.reviews{
  margin: 10px;
  border: solid 1px white;
}
</style>
