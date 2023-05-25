<template>
  <div>
    <navbar />
    <div class="profile">
      <div class="userInfo">
        <h1>프로필 정보</h1>
        <div class="userInfoJ">
          <div style="display: flex;">
            <h3>사용자 이름 : {{ USERNAME }}</h3>
            <div style="margin-left: 15px;">
              <i class="bi bi-heart fa-xl" style="color: rgb(0, 123, 255)" v-if="isNotProFileOwner && !isFollowedByCurrentUser" @click="follow"></i>
              <i class="bi bi-heart-fill fa-xl" style="color: rgb(0, 123, 255)" v-if="isNotProFileOwner && isFollowedByCurrentUser" @click="follow"></i>
            </div>
          </div>

          <h3 v-if="this.followerCheck" @click="isFollowers">팔로워 : {{ getFollowers.length }}</h3>
          <span v-else-if="getFollowers.length != 0 ">
            <h3 v-for="follower in getFollowers" :key="follower.id" @click="isFollowers"> 팔로워 : {{ follower.username }} </h3>
          </span>
          <span v-else-if="getFollowers.length == 0">
            <h3 @click="isFollowers">팔로워가 없습니다</h3>
          </span>
          <h3 v-if="this.followingsCheck" @click="isFollowings"> 팔로잉 : {{ getFollowings.length }} </h3>
          <span v-else-if="getFollowings.length != 0  && !isNotProFileOwner">
            <h3 v-for="follower in getFollowings" :key="follower.id" @click="isFollowings"> 팔로잉 : {{ follower.username }} </h3>
          </span>
          <span v-else-if="getFollowings.length == 0  && !isNotProFileOwner">
            <h3 @click="isFollowings">팔로잉한 유저가 없습니다.</h3>
          </span>
          <span v-else-if="getFollowings.length != 0">
            <h3 v-for="follower in getFollowings" :key="follower.id" @click="isFollowings">팔로잉 : {{ getFollowings.length }}</h3>
          </span>
          <span v-else-if="getFollowings.length == 0">
            <h3 @click="isFollowings">팔로잉한 유저가 없습니다.</h3>
          </span>
    
          <div class="introduction-container">
            <textarea v-model="content" v-if="!isNotProFileOwner" cols="100" rows="5"></textarea>
            <button class="btn btn-primary" v-if="!isNotProFileOwner" @click="createIntroduce">작성</button>
          </div>
          <h4 v-html="formattedContent"></h4>
        </div>
      </div>

      <div class="likeMovies">
        <h2>{{ USERNAME }}이 찜한 영화</h2>
        <div class="likeMoviesList">
          <h1 v-for="movie in likeMovie" :key="movie.id">
            <h3 @click="movieDetail(movie.id)">{{ movie.title }}</h3>
          </h1>
        </div>
      </div>
      <div class="guestBook">
      <h2>방명록</h2>
      <div class="guestBookList">
        <div class="guestBookInput">
          <textarea style="background-color:rgba(128, 128, 128, 0.152);color: white; border-radius: 10px;" cols="100" rows="4" type="text" v-model="guestBook" v-if="isNotProFileOwner"></textarea>
          <button class="btn btn-primary" v-if="isNotProFileOwner" @click="createGuestBooke" style="height: 100%;">작성</button>
        </div>
        <guestBookList />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";
import { mapState } from "vuex";
import guestBookList from "@/components/comments/guestBookList.vue";
import axios from "axios";
const API_URL = "http://127.0.0.1:8000";

export default {
  name: "proFile",
  components: {
    navbar,
    guestBookList,
  },
  data() {
    return {
      content: null,
      guestBook: null,
      getContnet: null,
      getFollowers: [],
      getFollowings: [],
      likeMovie: [],
      followerCheck: true,
      followingsCheck: true,
      isFollowing: false,
    };
  },
  mounted() {
    this.getGuestBook();
    this.getIntroduce();
    this.getFollower();
    this.getFollowing();
    this.getLikeMovie();
    this.checkFollowingStatus();
  },
  computed: {
    ...mapState([
      "userId",
      "userName",
      "USERID",
      "USERNAME",
      "movieList",
      "follows",
      "introduce",
    ]),
    isNotProFileOwner() {
      return this.userId !== this.USERID;
    },
    formattedContent() {
    if (this.getContnet) {
      return this.getContnet.replace(/\n/g, '<br>');
    }
    return null;
    },
    isFollowedByCurrentUser() {
      return this.getFollowers.some(follower => follower.id === this.userId);
    }
  },
  methods: {
    checkFollowingStatus() {
    axios({
      method: "get",
      url: `${API_URL}/accounts/profile/${this.USERID}/following/`,
      headers: {
        Authorization: `Token ${this.$store.state.token.key}`,
      },
    })
      .then((res) => {
        this.isFollowing = res.data.some(user => user.id === this.userId);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  
    isFollowers() {
      return (this.followerCheck = !this.followerCheck);
    },
    isFollowings() {
      return (this.followingsCheck = !this.followingsCheck);
    },
    createIntroduce() {
      const introduce = this.content;
      const profile = this.USERID;
      this.$store.dispatch("createIntroduce", { profile, introduce });
      location.reload();
    },
    getLikeMovie() {
      axios({
        method: "get",
        url: `${API_URL}/movies/${this.USERID}/liked_movies/`,
        headers: {
          Authorization: `Token ${this.$store.state.token.key}`,
        },
      })
        .then((res) => {
          this.likeMovie = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getIntroduce() {
      axios({
        method: "get",
        url: `${API_URL}/accounts/profile/${this.USERID}/introduce/`,
        headers: {
          Authorization: `Token ${this.$store.state.token.key}`,
        },
      })
        .then((res) => {
          this.getContnet = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createGuestBooke() {
      const profile = this.USERID;
      const user = this.userId;
      const content = this.guestBook;
      this.$store.dispatch("createGuestBook", { profile, user, content });
      location.reload();
    },
    getGuestBook() {
      this.$store.dispatch("getGuestBook", this.USERID);
    },
    movieDetail(movieId) {
      this.$store.dispatch("getMovieDetail", movieId);
    },

    follow() {
      const userName = this.USERNAME;
      this.$store.dispatch("follow", userName)
      .then(() => {
        this.checkFollowingStatus();
        location.reload()
      })
      .catch(err => {
        console.log(err);
      });
    },
    
    getFollower() {
      axios({
        method: "get",
        url: `${API_URL}/accounts/profile/${this.USERID}/follower/`,
        headers: {
          Authorization: `Token ${this.$store.state.token.key}`,
        },
      })
        .then((res) => {
          this.getFollowers = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getFollowing() {
      axios({
        method: "get",
        url: `${API_URL}/accounts/profile/${this.USERID}/following/`,
        headers: {
          Authorization: `Token ${this.$store.state.token.key}`,
        },
      })
        .then((res) => {
          this.getFollowings = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    ModifyUser() {
      this.$store.dispatch("ModifyUser", this.userId);
    },
  },
};
</script>

<style>
.profile {
  padding: 30px;
  color: white;
  width: 100%;
  max-width: 1500px;
  justify-content: center;
  margin: auto;
}
.userInfo{
  display: flex;
  color: white;
  padding: 20px;
  background-color: rgba(128, 128, 128, 0.127);
  border-radius: 20px;
}
.introduction-container {
  display: flex;
}

.userInfoJ{
  margin-left: 300px;
  color: white;
  width: 100%;
}
.userInfoJ h3{
  padding-bottom: 10px;
}

.likeMovies {
  display: flex;
  color: white;
  padding: 20px;
  background-color: rgba(128, 128, 128, 0.127);
}
.likeMoviesList{
  margin-left: 130px;
}
.guestBook {
  display: felx;
  color: white;
  padding: 20px;
  background-color: rgba(128, 128, 128, 0.127);
}
.guestBookList {
  margin-left: 370px;
}

.guestBookInput {
  display: flex;
  margin: 0;
  height: 100px;
}

.introduction-container > textarea{
  display: flex;
  justify-content: space-between;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 10px;
  background-color: rgba(128, 128, 128, 0.216);
}

</style>
