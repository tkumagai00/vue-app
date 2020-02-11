import Vue from 'vue'
import VueRouter from 'vue-router'
import BookSearch from "../components/BookSearch";
import BookForm from "../components/BookForm";
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: BookSearch
  },
  {
    path: '/form',
    name: 'form',
    component: BookForm
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
