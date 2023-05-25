<template>
  <div>
    <navbar/>
    <div class="container">
      <h1 style="color: white; margin: 20px;" >애니메이션</h1>
      <div class="row row-cols-md-4">
        <animationItem v-for="movie in animationMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import animationItem from '@/components/movies/genres/animationItem.vue'
export default {
  name:"animationPage",
  components:{
    navbar,
    animationItem
  },
  mounted() {
    this.getAnimationMovieList();
  },
  computed: {
    animationMovieList() {
      return this.$store.state.animationMovieList;
    },
  },
  methods: {
    getAnimationMovieList() {
      this.$store.dispatch("getAnimationMovieList");
    },
  },
};
</script>

<style>

</style>