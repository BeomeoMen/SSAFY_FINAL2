import Vue from 'vue'
import VueRouter from 'vue-router'
import mainView from '@/views/movies/mainView.vue'
import proFile from '@/views/accounts/profileView.vue'
import first from '@/views/movies/first.vue'
import movieDetail from '@/views/movies/movieDetail.vue'
import searchMovie from '@/views/movies/searchMovie.vue'

import actionPage from '@/components/movies/genres/action.vue'
import animationPage from '@/components/movies/genres/animation.vue'
import comedyPage from '@/components/movies/genres/comedy.vue'
import crimePage from '@/components/movies/genres/crime.vue'
import documentaryPage from '@/components/movies/genres/documentary.vue'
import dramaPage from '@/components/movies/genres/drama.vue'
import familyPage from '@/components/movies/genres/family.vue'
import fantasyPage from '@/components/movies/genres/fantasy.vue'
import historyPage from '@/components/movies/genres/history.vue'
import horrorPage from '@/components/movies/genres/horror.vue'
import musicPage from '@/components/movies/genres/music.vue'
import mysteryPage from '@/components/movies/genres/mystery.vue'
import romancePage from '@/components/movies/genres/romance.vue'
import sciencefictionPage from '@/components/movies/genres/sciencefiction.vue'
import thrillerPage from '@/components/movies/genres/thriller.vue'
import tvmoviePage from '@/components/movies/genres/tvmovie.vue'
import warPage from '@/components/movies/genres/war.vue'
import westernPage from '@/components/movies/genres/western.vue'

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
  },
  {
    path: '/movieDetail',
    name: 'movieDetail',
    component: movieDetail
  },
  {
    path: '/searchMovie',
    name: 'searchMovie',
    component: searchMovie
  },
  {
    // path: '/movies/genre/?genre_name=${genre_name}',
    path: '/actionPage',
    name: 'actionPage',
    component: actionPage
  },
  {
    path: '/animationPage',
    name: 'animationPage',
    component: animationPage
  },
  {
    path: '/comedyPage',
    name: 'comedyPage',
    component: comedyPage
  },
  {
    path: '/crimePage',
    name: 'crimePage',
    component: crimePage
  },
  {
    path: '/documentaryPage',
    name: 'documentaryPage',
    component: documentaryPage
  },
  {
    path: '/dramaPage',
    name: 'dramaPage',
    component: dramaPage
  },
  {
    path: '/familyPage',
    name: 'familyPage',
    component: familyPage
  },
  {
    path: '/fantasyPage',
    name: 'fantasyPage',
    component: fantasyPage
  },
  {
    path: '/historyPage',
    name: 'historyPage',
    component: historyPage
  },
  {
    path: '/horrorPage',
    name: 'horrorPage',
    component: horrorPage
  },
  {
    path: '/musicPage',
    name: 'musicPage',
    component: musicPage
  },
  {
    path: '/mysteryPage',
    name: 'mysteryPage',
    component: mysteryPage
  },
  {
    path: '/romancePage',
    name: 'romancePage',
    component: romancePage
  },
  {
    path: '/sciencefictionPage',
    name: 'sciencefictionPage',
    component: sciencefictionPage
  },
  {
    path: '/thrillerPage',
    name: 'thrillerPage',
    component: thrillerPage
  },
  {
    path: '/tvmoviePage',
    name: 'tvmoviePage',
    component: tvmoviePage
  },
  {
    path: '/warPage',
    name: 'warPage',
    component: warPage
  },
  {
    path: '/westernPage',
    name: 'westernPage',
    component: westernPage
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
