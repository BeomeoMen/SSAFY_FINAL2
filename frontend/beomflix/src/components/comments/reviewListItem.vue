<template>
  <div class="reviews">
    <!-- <h2>{{ review }}</h2> -->
    <h2>유저명 :{{review.username}}</h2>
    <h2>평점 : {{review.rank}}</h2>
    <h2>내용 :{{review.content}}</h2>
  </div>
</template>

<script>
export default {
  name: "reviewListItem",
  props: ['review']
}
</script>

<style scoped>
.reviews{
  margin: 10px;
  border: solid 1px white;
}
</style>
