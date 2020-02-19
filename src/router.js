import Vue from 'vue'
import VueRouter from 'vue-router'

// import mainPage from './components/mainPage.vue'
// import notFound from './components/notFound.vue'

// lazy loading
const mainPage = () => System.import('./components/mainPage.vue')
const notFound = () => System.import('./components/notFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/mainPage' },
    { path: '/mainPage', name: 'mainPage', component: mainPage },
    { path: '*', component: notFound }
  ]
})

export default router
