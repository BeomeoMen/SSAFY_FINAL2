<template>
  <div>
    <navbar/>
    <div class="container">
      <h1>액션영화</h1>
      <div class="row row-cols-md-4">
        <div v-for="movie in actionMovieList" :key="movie.id">
          {{ movie }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'

export default {
  name: "actionPage",
  components:{
    navbar
  },
  mounted() {
    this.getActionMovieList();
  },
  computed: {
    actionMovieList() {
      return this.$store.state.actionMovieList;
    },
  },
  methods: {
    getActionMovieList() {
      this.$store.dispatch("getActionMovieList");
    },
  },
};
</script>

<style>
h1 {
  color: white;
}
</style>
