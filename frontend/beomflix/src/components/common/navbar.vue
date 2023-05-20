<template>
  <header>
    <h1>
      <router-link to="/mainView">
        <img style="width:100px; height: 100px;" src="https://github.com/Jinga02/Baekjoon/assets/110621233/f5eecac2-948c-4471-8596-46cad9ee1729" alt="로고">
      </router-link>
    </h1>
    <div class="menubar">
      <ul class="menu">
        <li>영화</li>
        <li>만화</li>
        <li>내가 찜한 콘텐츠</li>
        <input type="text" placeholder="영화 제목을 입력해주세요" v-model="searchTitle" @keyup.enter="searchMovie">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">내 프로필</a>
          <ul class="dropdown-menu">
            <li>{{  }}</li>
            <li><router-link class="dropdown-item" to="/proFile">프로필 보기</router-link></li>
            <!-- <li><a class="dropdown-item" href="#scrollspyHeading3">프로필 보기</a></li> -->
            <li><a class="dropdown-item" href="#scrollspyHeading4" @click="logout">로그아웃</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "navBar",
  ...mapState({
      loginUser: state => state.userId
    }),
  data() {
    return {
      searchTitle: "",
    };
  },
  methods: {
    searchMovie() {
      if (this.searchTitle.trim() !== "") {
        this.$store.dispatch("searchMovie", { title: this.searchTitle });
        this.searchTitle = "";
      }
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  text-align: center;
  position: relative;
  height: 120px;
  border-bottom: 0.1px solid rgb(29, 28, 28);
}
header h1 {
  position: absolute;
  margin: 5px;
}
header ul.menu {
  position: absolute;
  padding: 30px 0px;
  right: 20px;
}
header ul.menu li{
  float: left;
  padding: 10px 20px;
  list-style: none;
  color: white;
}
header ul.menu input {
  float: left;
  padding: 10px 20px;
  list-style: none;
  color: black;
}

</style>
