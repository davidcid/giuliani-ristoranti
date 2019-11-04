import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Nosotros from '../views/Nosotros.vue'
import Local from '../views/Local.vue'
import Carta from '../views/Carta.vue'
import Reservas from '../views/Reservas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: Nosotros
  },
  {
    path: '/local',
    name: 'local',
    component: Local
  },
  {
    path: '/carta',
    name: 'carta',
    component: Carta
  },
  {
    path: '/reservas',
    name: 'reservas',
    component: Reservas
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
