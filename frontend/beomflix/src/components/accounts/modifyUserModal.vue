<template>
  <!-- Modal -->
  <div class="modal fade" id="modifyUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-black" id="exampleModalLabel">비밀번호 변경</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-dark-emphasis mt-2 mb-2">
          <form @submit.prevent="modifyUser">        
            <label for="new_password1"><b>변경 할 비밀번호</b></label><br>
            <input v-model="new_password1" style="width: 100%; padding: 5px;  border-radius: 5px; margin-bottom: 10px;" type="password" name="new_password1" id="new_password1" placeholder="변경 할 비밀번호를 입력하세요">
            <label for="new_password2"><b>변경 할 비밀번호 확인</b></label><br>
            <input v-model="new_password2" style="width: 100%; padding: 5px;  border-radius: 5px; margin-bottom: 10px;" type="password" name="new_password2" id="new_password2" placeholder="변경 할 비밀번호를 입력하세요 / 확인">
            <div class="modal-footer">
              <input type="submit" class="btn btn-primary" value="변경" data-bs-dismiss="modal">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "modifyUserModal",
  data(){
    return{
      new_password1 : null,
      new_password2 : null,
    }
  },
  methods: {
    modifyUser(){
      const new_password1 = this.new_password1
      const new_password2 = this.new_password2
      this.$store.dispatch('modifyUser', {new_password1, new_password2})
      this.new_password1 = null 
      this.new_password2 = null
    }
  }
}
</script>

<style>

</style>