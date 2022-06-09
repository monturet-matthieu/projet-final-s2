<template>
  <div
    class="grid grid-cols-1 lg:text-lg xl:text-xl lg:grid-cols-2 xl:grid-cols-4"
  >
    <div>
      <h2 class="text-2xl font-bold mt-14 mb-2 ml-5">Profil</h2>
      <div
        class="
          bg-white
          text-Texte text-center
          font-bold
          flex flex-col
          w-3/4
          mx-auto
          content-center
          shadow-lg
        "
      >
        <RouterLink class="p-5" to="/parametres/controle-compte">Contrôle du compte</RouterLink>
        <div class="h-[1px] bg-slate-100"></div>
        <RouterLink class="p-5" to="/parametres/mes-categories">Mes catégories</RouterLink>
        <div class="h-[1px] bg-slate-100"></div>
        <RouterLink class="p-5" to="/parametres/lien-amitie">Lien d'amitié</RouterLink>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-2 ml-5 mt-14">Application</h2>
      <div
        class="
          bg-white
          text-Texte text-center
          font-bold
          flex flex-col
          w-3/4
          mx-auto
          content-center
          shadow-lg
        "
      >
        <RouterLink class="p-5" to="/parametres/informations">Informations</RouterLink>
        <div class="h-[1px] bg-slate-100"></div>
        <RouterLink class="p-5" to="/parametres/autorisations">Autorisations</RouterLink>
        <div class="h-[1px] bg-slate-100"></div>
        <RouterLink class="p-5" to="/parametres/confidentialite">Confidentialité</RouterLink>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-2 ml-5 mt-14">Connexion</h2>
      <div
        class="
          bg-white
          text-Texte text-center
          font-bold
          flex flex-col
          w-3/4
          mx-auto
          content-center
          shadow-lg
        "
      >
        <RouterLink class="p-5" to="/parametres/maj">Infos sur les mises à jour</RouterLink>
        <div class="h-[1px] bg-slate-100"></div>
        <RouterLink class="p-5" to="/parametres/contact">Contact & soutient</RouterLink>
        <div class="h-[1px] bg-slate-100"></div>
        <RouterLink class="p-5" to="/parametres/cgu">Conditions générales d'utilisation</RouterLink>
        <div class="h-[1px] bg-slate-100"></div>
        <RouterLink class="p-5" to="/parametres/cgv">Conditions générales de vente</RouterLink>
        <div class="h-[1px] bg-slate-100"></div>
        <RouterLink class="p-5" to="/parametres/mentions">Mentions légales</RouterLink>
        <div class="h-[1px] bg-slate-100"></div>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-2 ml-5 mt-14">Autres</h2>
      <div
        class="
          bg-white
          text-Texte text-center
          font-bold
          flex flex-col
          w-3/4
          mx-auto
          content-center
          shadow-lg
          mb-24
        "
      >
        <a class="p-5" href="#">Passer en mode premium</a>
        <div class="h-[1px] bg-slate-100"></div>
        <a class="p-5" href="/connexion">Changer de compte</a>
        <div class="h-[1px] bg-slate-100"></div>
        <button class="p-5 text-Important font-semibold" @click="onDcnx()">
          Deconnexion
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// Bibliothèques Firebase  : import des fonctions
//  signInWithEmailAndPassword : Authentification avec email et mot de passe
//  getAuth : Fonction générale d'authentification
//  signOut : Se deconnecter
//  onAuthStateChanged : connaitre le statut de l'utilisateur (connecté ou non)
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  name: "Connexion",
  data() {
    // Données de la vue
    return {
      user: {
        // user se connectant
        email: null,
        password: null,
      },
    };
  },

  mounted() {
    // Montage de la vue
    // Rechercher si un user est déjà connecté
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "User déjà connecté : " + this.user.email;
    } else {
      this.message = "User non connecté : " + this.user.email;
    }
  },

  methods: {
    onDcnx() {
      // Se déconnecter
      signOut(getAuth())
        .then((response) => {
          this.user = getAuth().currentUser;
          this.user = {
            email: null,
            password: null,
          };
          console.log("user deconnecté ", this.user);
          this.message = "user non connecté";
        })
        .catch((error) => {
          console.log("erreur deconnexion ", error);
        });
    },
  },
};
</script>