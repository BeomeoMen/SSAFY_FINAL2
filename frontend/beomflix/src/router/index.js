import Vue from 'vue'
import VueRouter from 'vue-router'
import mainView from '@/views/movies/mainView.vue'
import proFile from '@/views/accounts/profileView.vue'
import first from '@/views/movies/first.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'first',
    component: first
  },
  {
    path: '/mainView',
    name: 'mainView',
    component: mainView
  },
  {
    path: '/proFile',
    name: 'proFile',
    component: proFile
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
