import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import About from '../views/Apropos.vue'
import AjoutQuete from '../views/AjoutQuete.vue'
import Mentions from '../views/settings/Mentions.vue'
import CGU from '../views/settings/CGU.vue'
import CGV from '../views/settings/CGV.vue'
import Autorisations from '../views/settings/Autorisations.vue'
import Confidentialite from '../views/settings/Confidentialite.vue'
import Contact from '../views/settings/Contact.vue'
import ControleCompte from '../views/settings/ControleCompte.vue'
import LienAmi from '../views/settings/LienAmi.vue'
import Informations from '../views/settings/Informations.vue'
import MesCategories from '../views/settings/MesCategories.vue'
import Maj from '../views/settings/Maj.vue'
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
    { path: '/parametres/mentions', name: 'Mentions', component: Mentions },
    { path: '/parametres/cgu', name: 'CGU', component: CGU },
    { path: '/parametres/cgv', name: 'CGV', component: CGV },
    { path: '/parametres/autorisations', name: 'Autorisations', component: Autorisations },
    { path: '/parametres/confidentialite', name: 'Confidentialite', component: Confidentialite },
    { path: '/parametres/contact', name: 'Contact', component: Contact },
    { path: '/parametres/controle-compte', name: 'ControleCompte', component: ControleCompte },
    { path: '/parametres/lien-amitie', name: 'LienAmi', component: LienAmi },
    { path: '/parametres/informations', name: 'Informations', component: Informations },
    { path: '/parametres/mes-categories', name: 'MesCategories', component: MesCategories },
    { path: '/parametres/maj', name: 'Maj', component: Maj },
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
