<template>
  <div class="Item">
    <h1>작성자 : {{ guestBook.username }}</h1>
    <h1>내용 : {{ guestBook.content }}</h1>
    <button class="btn btn-primary" v-if="isGuestBookOwner" @click="deleteGuestBook">삭제</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:"guestBookListItem",
  props:{
    guestBook : Object
  },
  computed:{
    ...mapState([
      'userId'
    ]),
    isGuestBookOwner(){
      return this.guestBook.user === this.userId
    },
  },
  methods:{
    deleteGuestBook(){
      const profileId = this.guestBook.profile
      const guestBookId = this.guestBook.id      
      console.log(profileId, guestBookId)
      this.$store.dispatch('deleteGuestBook', {profileId, guestBookId})
      location.reload()
    }
  }
}
</script>

<style scoped>
  .Item{
    margin: 10px;
    border: solid 1px white;
    padding: 10px;
  }
</style>