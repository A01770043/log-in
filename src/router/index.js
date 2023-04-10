import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import Materias from '../views/Materias.vue'
import signup from '../views/signup.vue'
import User from '../views/User.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/materias',
    name: 'Materias',
    component: Materias
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/User',
    name: 'User',
    component: User
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
