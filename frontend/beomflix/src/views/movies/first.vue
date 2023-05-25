<template>
  <div>
  <!-- <navBar/> -->
    <h1>
      <a href="">
          <img style="width:100px; height: 100px;" src="https://github.com/Jinga02/Algorithm/assets/110621233/035bdd8f-afac-46ee-8d85-c08b6ecae0cf" alt="로고">
      </a>
    </h1>
    <!-- 시작하기 -->
    <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center" style="margin-top: 200px;">
      <div class="col-lg-8 align-self-end mb-5">
        <h1 class="text-white">원하는 영화, 만화를 찾고 싶다면 <br><br> 어떤 영화가 좋은지, 어떤 영화가 재밌는지 모르겠다면</h1> <br>
        <h3 class="text-white" style="margin-bottom: 40px;">
          무료로 원하는 영화, 만화 등을 찾아보세요.<br><br>
          신뢰도 높은 알고리즘으로 이용자 맞춤 영화를 추천해 드립니다.
        </h3>
        <a class="btn btn-primary btn-xl" style="padding: 10px 40px;" href="#loginModal" data-bs-toggle="modal" data-target="#login"><h4>시작하기</h4></a>
        <span style="margin: 10px;"></span>
        <a class="btn btn-primary btn-xl" style="padding: 10px 40px;" href="#signUpModal" data-bs-toggle="modal" data-target="#signup"><h4>회원가입</h4></a>
      </div>
    </div>
    <loginModal/>
    <signUpModal/>
  </div>
</template>

<script>
import loginModal from '@/components/accounts/loginModal.vue'
import signUpModal from '@/components/accounts/signupModal.vue'

export default {
  name : "firstView",
  components:{
    loginModal,
    signUpModal
  },
}
</script>

<style>
/* .align-items-center {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  } */
</style>