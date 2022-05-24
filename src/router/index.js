import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Mentions from '../views/Mentions.vue'
import CGU from '../views/CGU.vue'
import Parametres from '../views/Parametres.vue'
import Profil from '../views/Profil.vue'
import Social from '../views/Social.vue'
import Connexion from '../views/Connex.vue'
import Arrivee1 from '../views/Arrivee1.vue'
import QuetesPerso from '../views/QuetesPerso.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Accueil },
    { path: '/mentions', name: 'Mentions', component: Mentions },
    { path: '/cgu', name: 'CGU', component: CGU },
    { path: '/parametres', name: 'Parametres', component: Parametres },
    { path: '/profil', name: 'Profil', component: Profil },
    { path: '/social', name: 'Social', component: Social },
    { path: '/connexion', name: 'Connexion', component: Connexion },
    { path: '/arrivee1', name: 'Arrivee1', component: Arrivee1 },
    { path: '/quetesPerso', name: 'QuetesPerso', component: QuetesPerso },
  ]
})

export default router
