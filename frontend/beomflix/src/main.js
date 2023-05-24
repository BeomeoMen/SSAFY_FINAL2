import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (to.name === 'mainView' && isLoggedIn()) {
//     // 로그인 후 인트로 페이지로 이동
//     next({ name: 'intro' })
//   } else {
//     next()
//   }
// })


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// function isLoggedIn() {
//   return store.state.userId !== null;
// }
