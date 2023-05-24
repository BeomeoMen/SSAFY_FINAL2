<template>
  <div>
    <navBar />
    <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center" >
      <div class="col-lg-8 align-self-end mb-5">
        <p class="first">
          무료로 원하는 영화, 만화 등을 찾아보세요.<br />
          신뢰도 높은 알고리즘으로 이용자 맞춤 영화를 추천해 드립니다. <br />
          포스터의 아무곳이나 클릭하면 상세보기로 이동합니다. <br>
          다음 버튼을 통해 다른 추천 작품들을 볼 수 있습니다.
        </p>
      </div>
    </div>
    <div class="button">
      <button class="btn btn-primary" @click="slideToPrev">이전</button>
      <button class="btn btn-primary" @click="slideToNext">다음</button>
    </div>
		<swiper ref="filterSwiper" role="tablist">
			<swiper-slide role="tab"><recommendGenre /></swiper-slide>
			<swiper-slide role="tab"><nowMovieList /></swiper-slide>
      <swiper-slide role="tab"><popularMovie /></swiper-slide>
		</swiper>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar.vue";
import popularMovie from '@/components/movies/popularMovie.vue'
import nowMovieList from "@/components/movies/nowMovieList.vue";
import recommendGenre from "@/components/movies/recommendGenre.vue";


import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	

  name: "mainView",
  // data () {
  //    const _vm = this
  //    return {
  //     swiperOption: {
  //       on: {
  //         click: function () {
  //           _vm.slideMoveTo()
  //           _vm.activeTab()
  //         },
  //         tap: function () {
  //           _vm.slideMoveTo()
  //           _vm.activeTab()
  //         }
  //       }
  //     }
  //   }
  // },
  components: {
    navBar,
    popularMovie,
    nowMovieList,
    recommendGenre,
    swiper,
    swiperSlide
  },
  mounted() {
    this.$store.commit("setShowIntro", false);
    this.getMovieList();
    this.getNowMovie();
    this.getPopluarMovie()
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResults;
    },
  },
  methods: {
    slideToPrev() {
    this.$refs.filterSwiper.swiper.slidePrev();
  },
  slideToNext() {
    this.$refs.filterSwiper.swiper.slideNext();
  },
    getMovieList() {
      this.$store.dispatch("getMovieList");
    },
    getNowMovie() {
      this.$store.dispatch("getNowMovieList");
    },
    getPopluarMovie(){
      this.$store.dispatch("getPopluarMovie")
    },
    slideMoveTo: function (swiper = this.swiper) {
      if (!swiper.clickedSlide) return      
      const activeIndex = swiper.clickedIndex
      swiper.slideTo(activeIndex)
    }
  },
};
</script>


<style lang="scss" scoped>
.button{
  text-align: center;
}
img {
  border-radius: 20px;
}
.first {
  color: white;
  font-size: 30px;
  margin: 30px;
}
.swiper-container {
	color: white;
  padding: 0 20px; 
  &:before,
  &:after { 
    display: block;
    position: absolute;
    top: 0;
    width: 20px; 
    z-index: 10;
    content: "";
  }
  &:before {
    left: 0;
  }
  &:after {
    right: 0;
  }
}
</style>


