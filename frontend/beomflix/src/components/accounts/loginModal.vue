<template>
  <!-- Modal -->
  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-black" id="exampleModalLabel">로그인</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-dark-emphasis mt-2 mb-2">
          <form @submit.prevent="login">
            <label for="username"><b>ID</b></label><br>
            <input v-model="username" style="width: 100%; padding: 5px;  border-radius: 5px; margin-bottom: 10px;" type="text" name="username" id="username" placeholder="아이디 입력">
            <label for="password"><b>Password</b></label><br>
            <input v-model="password" style="width: 100%; padding: 5px;  border-radius: 5px; margin-bottom: 10px;" type="password" name="password" id="password" placeholder="비밀번호 입력">
            <div class="modal-footer">
              <input type="submit" class="btn btn-primary" value="로그인" data-bs-dismiss="modal">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"loginModal",
  data(){
    return{
      username : null,
      password : null
    }
  },
  methods: {
    login(){
      const username = this.username
      const password = this.password

      const payload = {
        username, password
      }
      this.$store.dispatch('login', payload)
      this.$router.push({name:"mainView"})
    }
  }

}
</script>

<style>

</style>