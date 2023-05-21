<template>
  <div class="reviews">
    <h1>{{ review }}</h1>
    <h2>userId : {{ review.user.id }}</h2>
    <h2>유저명 :{{review.user.username}}</h2>
    <h2>평점 : {{review.rank}}</h2>
    <h2>내용 :{{review.content}}</h2>
    <a class="btn btn-primary" v-if="isReviewOwner" href="#modifyReviewModal" data-bs-toggle="modal" data-target="#modifyReview">수정</a>
    <modifyReviewModal :reviewId="review.id" />
    <button class="btn btn-primary" v-if="isReviewOwner" @click="deleteReview">삭제</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import modifyReviewModal from '@/components/comments/modifyReviewModal.vue'
export default {
  name: "reviewListItem",
  props: ['review'],
  components:{
    modifyReviewModal
  },
  computed:{
    ...mapState({
      loginUser: state => state.userId
    }),
    isReviewOwner() {
      return this.loginUser === this.review.user.id; 
    }
  },
  methods:{
    modifyReview(){
      console.log('수정')
    },  
    deleteReview(){
      this.$store.dispatch('deleteReview', this.review.id)
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
