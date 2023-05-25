<template>
  <header>
    <h1>
      <router-link to="/mainView">
        <img style="width:100px; height: 100px;" src="https://github.com/Jinga02/Algorithm/assets/110621233/035bdd8f-afac-46ee-8d85-c08b6ecae0cf" alt="로고">
      </router-link>
    </h1>
    <div class="menubar">
      <ul class="menu">
        <li>
          <input type="text" placeholder="영화 제목을 입력해주세요" v-model="searchTitle" @keyup.enter="searchMovie">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="-2 -5 15 20">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">장르</a>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" to="/actionPage">액션</router-link></li>
            <li><router-link class="dropdown-item" to="/animationPage">만화</router-link></li>
            <li><router-link class="dropdown-item" to="/comedyPage">개그</router-link></li>
            <li><router-link class="dropdown-item" to="/crimePage">범죄</router-link></li>
            <li><router-link class="dropdown-item" to="/thrillerPage">스릴러</router-link></li>
            <li><router-link class="dropdown-item" to="/documentaryPage">다큐멘터리</router-link></li>
            <li><router-link class="dropdown-item" to="/dramaPage">드라마</router-link></li>
            <li><router-link class="dropdown-item" to="/familyPage">가족</router-link></li>
            <li><router-link class="dropdown-item" to="/fantasyPage">판타지</router-link></li>
            <li><router-link class="dropdown-item" to="/historyPage">역사</router-link></li>
            <li><router-link class="dropdown-item" to="/horrorPage">공포</router-link></li>
            <li><router-link class="dropdown-item" to="/musicPage">음악</router-link></li>
            <li><router-link class="dropdown-item" to="/mysteryPage">미스테리</router-link></li>
            <li><router-link class="dropdown-item" to="/romancePage">연애</router-link></li>
            <li><router-link class="dropdown-item" to="/sciencefictionPage">SF</router-link></li>
            <li><router-link class="dropdown-item" to="/tvmoviePage">TV시리즈</router-link></li>
            <li><router-link class="dropdown-item" to="/warPage">전쟁</router-link></li>
            <li><router-link class="dropdown-item" to="/westernPage">서부</router-link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">내 프로필</a>
          <ul class="dropdown-menu">
            <li class="dropdown-item" style="color: black;" @click="getUserProfile">내 프로필 보기</li>
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
  data() {
    return {
      searchTitle: "",
    };
  },
  computed:{
    ...mapState([
    "userName",
    "userId"
  ]),
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
    },
    getUserProfile() {
      this.$store.dispatch("getUserProfile", this.userId);
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
  margin: auto;
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
  font-size: 18px;
  color: white;
}
header ul.menu input {
  float: left;
  padding: 10px 20px;
  list-style: none;
  color: black;
}
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
}

input::placeholder {
  color: #999;
}

input:focus {
  border-color: #00aaff;
  box-shadow: 0 0 5px rgba(0, 170, 255, 0.5);
}
</style>
