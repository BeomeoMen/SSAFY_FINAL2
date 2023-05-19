<template>
  <div>
  <!-- <navBar/> -->
    <h1>
      <a href="">
          <img style="width:100px; height: 100px;" src="https://github.com/Jinga02/Baekjoon/assets/110621233/f5eecac2-948c-4471-8596-46cad9ee1729" alt="로고">
      </a>
    </h1>
    <!-- 시작하기 -->
    <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
      <div class="col-lg-8 align-self-end mb-5">
        <h1 class="text-white">원하는 영화, 만화 등을 찾고 싶다면 <br> SSAFY Original 콘텐츠는 오직 <br> 에서만. </h1>
        <a class="btn btn-primary btn-xl m-5" href="#loginModal" data-bs-toggle="modal" data-target="#login">시작하기</a>
        <a class="btn btn-primary btn-xl m-5" href="#signUpModal" data-bs-toggle="modal" data-target="#signup">회원가입</a>
        <p class="text-white">
          무료로 원하는 영화, 만화 등을 찾아보세요.<br>
          신뢰도 높은 알고리즘으로 이용자 맞춤 영화를 추천해 드립니다.
        </p>
      </div>
    </div>
    <div>
      <h1 class="text-white text-center">소개 글 뭐적지</h1>
    </div>
    <div>
      <h1 class="text-white text-center">소개 글 뭐적지</h1>
    </div>
    <!-- 로그인 모달-->
    <!-- 로그인 시 mainView로 이동-->
    <loginModal/>
    <signUpModal/>
    <!-- Footer-->
    <footer class="bg-black py-5">
      <div class="container px-4 px-lg-5">
        <div class="small text-center text-white">Copyright &copy; 2023 - Company Name</div>
      </div>
    </footer>
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

</style>