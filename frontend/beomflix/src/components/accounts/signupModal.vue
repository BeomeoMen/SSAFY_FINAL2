<template>
  <!-- Modal -->
  <div class="modal fade" id="signUpModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-black" id="exampleModalLabel">회원가입</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-dark-emphasis mt-2 mb-2">
          <form @submit.prevent="signUp">        
            <label for="username"><b>ID</b></label><br>
            <input v-model="username" style="width: 100%; padding: 5px;  border-radius: 5px; margin-bottom: 10px;" type="text" name="username" id="username" placeholder="이름 입력">
            <label for="password1"><b>Password</b></label><br>
            <input v-model="password1" style="width: 100%; padding: 5px;  border-radius: 5px; margin-bottom: 10px;" type="password" name="password1" id="password1" placeholder="비밀번호 입력">
            <label for="password2"><b>Password Confirmation</b></label><br>
            <input v-model="password2" style="width: 100%; padding: 5px;  border-radius: 5px; margin-bottom: 10px;" type="password" name="password2" id="password2" placeholder="비밀번호 확인">
            <div class="modal-footer">
              <input type="submit" class="btn btn-primary" value="회원가입" data-bs-dismiss="modal">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "signupModal",
  data(){
    return{
      username : null,
      password1 : null,
      password2 : null,
    }
  },
  methods: {
    signUp(){
      const username = this.username
      const password1 = this.password1
      const password2 = this.password2

      const payload = {
        username, password1, password2
      }

      this.$store.dispatch('signUp', payload)
      this.username = null
      this.password1 = null 
      this.password2 = null
    }
  }
}
</script>

<style>

</style>