import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Clientes from '../views/Clientes'
import Dispositivos from '../views/Dispositivos'
import Equipos from '../views/Equipos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
  {
    path: '/equipos',
    name: 'Equipos',
    component: Equipos
  },
  {
    path: '/dispositivos',
    name: 'Dispositivos',
    component: Dispositivos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
