import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import About from '../views/Apropos.vue'
import AjoutQuete from '../views/AjoutQuete.vue'
import Mentions from '../views/Mentions.vue'
import CGU from '../views/CGU.vue'
import CGV from '../views/CGV.vue'
import Parametres from '../views/Parametres.vue'
import Profil from '../views/Profil.vue'
import Social from '../views/Social.vue'
import Connexion from '../views/Connex.vue'
import Arrivee1 from '../views/Arrivee1.vue'
import Arrivee2 from '../views/Arrivee2.vue'
import Arrivee3 from '../views/Arrivee3.vue'
import QuetesPerso from '../views/QuetesPerso.vue'
import Messagerie from '../views/Messagerie.vue'
import Chat from '../views/Chat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Accueil },
    { path: '/about', name: 'About', component: About },
    { path: '/ajoutquete', name: 'AjoutQuete', component: AjoutQuete },
    { path: '/mentions', name: 'Mentions', component: Mentions },
    { path: '/cgu', name: 'CGU', component: CGU },
    { path: '/cgv', name: 'CGV', component: CGV },
    { path: '/parametres', name: 'Parametres', component: Parametres },
    { path: '/profil', name: 'Profil', component: Profil },
    { path: '/social', name: 'Social', component: Social },
    { path: '/connexion', name: 'Connexion', component: Connexion },
    { path: '/arrivee1', name: 'Arrivee1', component: Arrivee1 },
    { path: '/arrivee2', name: 'Arrivee2', component: Arrivee2 },
    { path: '/arrivee3', name: 'Arrivee3', component: Arrivee3 },
    { path: '/quetesperso', name: 'QuetesPerso', component: QuetesPerso },
    { path: '/messagerie', name: 'Messagerie', component: Messagerie },
    { path: '/chat', name: 'Chat', component: Chat },
  ]
})

export default router
