<template>
  <div class="reviews">
    <h2>userId : {{ review.user.id }}</h2>
    <h2>유저명 :{{review.user.username}}</h2>
    <h2>평점 : {{review.rank}}</h2>
    <h2>내용 :{{review.content}}</h2>
    <button v-if="isReviewOwner" @click="modifyReview">리뷰수정</button>
    <button v-if="isReviewOwner" @click="deleteReview">리뷰삭제</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "reviewListItem",
  props: ['review'],
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
      console.log('삭제')
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
