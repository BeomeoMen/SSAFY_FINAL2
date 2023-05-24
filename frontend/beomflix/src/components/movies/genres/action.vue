<template>
  <div>
    <navbar/>
    <div class="container">
      <h1>액션</h1>
      <div class="row row-cols-md-4">
        <actionItem v-for="movie in actionMovieList.movies" :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import actionItem from '@/components/movies/genres/actionItem.vue'
export default {
  name: "actionPage",
  components:{
    navbar,
    actionItem
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

<style scoped>

</style>
