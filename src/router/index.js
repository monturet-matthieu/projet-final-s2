import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Mentions from '../views/Mentions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Accueil
    },
    { path: '/mentions', name: 'Mentions', component: Mentions },
  ]
})

export default router
