<template>
  <div>
    <navbar/>
    <div>
      <h1>프로필 사진, 프로필명, 팔로우와 팔로잉 부분입니다.</h1>
    </div>
    <div>
      <h1>자기소개 입니다.</h1>
    </div>
    <div>
      <h1>찜한 목록 부분입니다.</h1>
    </div>
    <div>
      <h1>방명록 부분입니다.</h1>
    </div>
  </div>  
</template>

<script>
import navbar from '@/components/common/navbar.vue'
export default {
  name: "proFile",
  components:{
    navbar,
  }
}
</script>

<style>

</style>