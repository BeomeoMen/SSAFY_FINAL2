<template>
  <div>
    <guestBookListItem v-for="guestBook in guestBookList" :key="guestBook.id" :guestBook="guestBook"/>
  </div>
</template>

<script>
import guestBookListItem from '@/components/comments/guestBookListItem.vue'
export default {
  name: "guestBookList",
  components:{
    guestBookListItem
  },
  computed:{
    guestBookList(){
      return this.$store.state.guestBookList
    }
  }
}
</script>

<style>

</style>