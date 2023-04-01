import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import Materias from '../views/Materias.vue'
import loop from '../views/loop.vue'

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
  path: '/loop',
    name: 'loop',
    component: loop
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
