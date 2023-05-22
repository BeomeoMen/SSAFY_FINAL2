<template>
<div>
  <navbar/>
  <div class="container">
    <h1>애니메이션</h1>
    <div class="row row-cols-md-4">
      <div v-for="movie in animationMovieList" :key="movie.id">
        {{ movie }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'

export default {
  name:"animationPage",
  components:{
    navbar
  },
  mounted() {
    this.getAnimationMovieList();
  },
  computed: {
    animationMovieList() {
      return this.$store.state.actionMovieList;
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
h1 {
  color: white;
}
</style>