<template>
  <div>
    <navBar/>
    <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
      <div class="col-lg-8 align-self-end mb-5">
        <p class="first">
          무료로 원하는 영화, 만화 등을 찾아보세요.<br>
          신뢰도 높은 알고리즘으로 이용자 맞춤 영화를 추천해 드립니다. <br>
          포스터의 아무곳이나 클릭하면 상세보기로 이동합니다.
        </p>
      </div>
    </div>
    <div>

    </div>
    <div>
      <movieList class="movieList"/>
    </div>
    <div>
      <nowMovieList/>
    </div>
    <div>
      <h1 class="text-white text-center">찜한 콘텐츠 중 가장 많은 장르</h1>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/common/navbar.vue'
import movieList from '@/components/movies/movieList.vue'
import nowMovieList from '@/components/movies/nowMovieList.vue'
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'
export default {
  name : "mainView",
  data(){
    return{
      recommendationMovie:[]
    }
  },
  components:{
    navBar,
    movieList,
    nowMovieList,
  },
  mounted(){
    this.getMovieList()
    this.getNowMovie()
    this.getrecommendationMovie()
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResults;
    }
  },
  methods:{
    getMovieList(){
      this.$store.dispatch('getMovieList')
    },
    getNowMovie(){
      this.$store.dispatch('getNowMovieList')
    },
    getrecommendationMovie(){
      axios({
        method:'get',
        url:`${API_URL}/movies/recommend_genre/`,
        headers: {
          Authorization: `Token ${this.$store.state.token.key}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        this.recommendationMovie = res.data
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
.first{
  color: white;
  font-size: 30px;
  margin: 30px;
}
</style>
