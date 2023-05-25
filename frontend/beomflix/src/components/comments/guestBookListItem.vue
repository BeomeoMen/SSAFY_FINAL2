<template>
  <div class="Item">
    <h4 @click="getUserProfile">작성자 : {{ guestBook.username }}</h4>
    <h4>내용 : {{ guestBook.content }}</h4>
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
      'userId',
      'USERID'
    ]),
    isGuestBookOwner(){
      return this.guestBook.user === this.userId
    },
  },
  methods:{
    deleteGuestBook(){
      const profileId = this.guestBook.profile
      const guestBookId = this.guestBook.id      
      this.$store.dispatch('deleteGuestBook', {profileId, guestBookId})
      location.reload()
    },
    getUserProfile() {
      this.$store.dispatch("getUserProfile", this.guestBook.user);
    }
  }
}
</script>

<style scoped>
  .Item{
    margin: 10px 0px;
    border: solid 1px white;
    padding: 10px;
    width: 863px;
  }

</style>