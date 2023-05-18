<template>
  <div id="app">
    <!-- <first v-if="!isLogin" /> -->
    <!-- <mainView v-else /> -->
    <router-view/>
  </div>
</template>

<script>
// import first from '@/views/movies/first.vue';
// import mainView from '@/views/movies/mainView.vue'
export default {
  name: 'App',
  components: {
    // first,
    // mainView
  },
  computed:{
    isLogin(){
      return this.$store.getters.isLogin
    }
  },
  methods: {
  }
}
</script>

<style>


</style>

