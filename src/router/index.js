import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import Materias from '../views/Materias.vue'
import iniciosesion from '../views/iniciosesion.vue'
import nuevacuenta from '../views/nuevacuenta.vue'


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
    path: '/iniciosesion',
    name: 'iniciosesion',
    component: iniciosesion
  },
  {
    path: '/nuevacuenta',
    name: 'nuevacuenta',
    component: nuevacuenta
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
