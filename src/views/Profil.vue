
<template>
<main>
  <body>
  <h1 class="font-gothic font-bold text-2xl ml-5">Profil</h1>
  <router-link to="/arrivee2"><img class="mx-auto" src="/public/img/modifier.png" alt="" /></router-link>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div v-for="user in listeUsers" :key="user.id">
      <figure class="mx-auto w-2/6">
        
        <img class="w-full" :src="userInfo[0].avatar" alt="avatar de l'utilisateur" />
        <figcaption
          class="
            text-center
            mx-auto
            font-gothic font-bold
            text-Secondaire text-2xl
          "
        >
          {{user.login}}
        </figcaption>
      </figure>
      <img
        class="mx-auto mt-5 w-3/4"
        src="/public/img/barre-profil.png"
        alt="barre de progression du joueur"
      />
    </div>
    <div class="ml-6 mt-5">
      <div class="flex flex-row gap-x-10 mt-5 content-center">
        <h3 class="text-xl font-extrabold text-Texte">Fortune</h3>
        <span class="text-Secondaire font-bold text-xl">13 052</span>
        <img src="/public/icon/ruby.svg" alt="" />
      </div>
      <div class="flex mt-5 flex-row gap-x-10 content-center">
        <h3 class="text-xl font-extrabold text-Texte">
          Éti’quêtes abandonnées
        </h3>
        <span class="text-Secondaire font-bold text-xl">17</span>
      </div>
      <div class="flex mt-5 flex-row gap-x-10 content-center">
        <h3 class="text-xl font-extrabold text-Texte">Éti’quêtes créées</h3>
        <span class="text-Secondaire font-bold text-xl">31</span>
      </div>
      <div class="flex mt-5 flex-row gap-x-10 content-center">
        <h3 class="text-xl font-extrabold text-Texte">Défis réalisés</h3>
        <span class="text-Secondaire font-bold text-xl">73/153</span>
      </div>
      <img
        class="w-2/3 mx-auto mt-5"
        src="/public/img/upgrade.png"
        alt="bouton go premium"
      />
    </div>
  </div>

  <h2 class="mt-10 font-gothic font-bold text-2xl ml-5 mb-5">Statistiques</h2>
  <div
    class="
      text-base
      font-gothic
      grid grid-cols-2
      sm:grid-cols-3
      gap-x-2 gap-y-4
    "
  >
    <div class="content-center">
      <h4 class="text-center font-gothic font-semibold">Sport</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/sport.png"
        alt="catégorie sport"
      />
      <p class="text-center font-karla font-semibold">17/20</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Bien-être</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/bien-etre.png"
        alt="catégorie bien-être"
      />
      <p class="text-center font-karla font-semibold">16/20</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Hygiène de vie</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/hygiène.png"
        alt="catégorie hygiène de vie"
      />
      <p class="text-center font-karla font-semibold">13/20</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Ecologie</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/ecologique.png"
        alt="catégorie ecologie"
      />
      <p class="text-center font-karla font-semibold">8/15</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Entourage</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/entourage.png"
        alt="catégorie entourage"
      />
      <p class="text-center font-karla font-semibold">7/15</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Travail</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/travail.png"
        alt="catégorie travail"
      />
      <p class="text-center font-karla font-semibold">6/15</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Alimentaion</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/alimentation.png"
        alt="catégorie alimentation"
      />
      <p class="text-center font-karla font-semibold">4/15</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Organisation</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/organisation.png"
        alt="catégorie organisation"
      />
      <p class="text-center font-karla font-semibold">2/15</p>
    </div>
    <div class="center">
      <h4 class="text-center font-gothic font-semibold">Art</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/art.png"
        alt="catégorie art"
      />
      <p class="text-center font-karla font-semibold">2/15</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Dépass. de soi</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/depassement.png"
        alt="catégorie organisation"
      />
      <img class="w-8 mx-auto" src="/public/icon/bloque.svg" alt="cadenas" />
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Economique</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/economique.png"
        alt="catégorie economique"
      />
      <img class="w-8 mx-auto" src="/public/icon/bloque.svg" alt="" />
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Numérique</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/numerique.png"
        alt="catégorie numérique"
      />
      <img
        class="w-8 mx-auto"
        src="/public/icon/bloque.svg"
        alt="icone indiquant que le contenu est bloqué"
      />
    </div>
  </div>

  <a href="https://www.google.com/intl/fr_fr/adsense/start/" target="_blank"
    ><img
      src="/public/img/ads-l.png"
      alt="cadran publicitaire"
      class="justify-center mx-auto p-8 mb-20"
  /></a>
   </body>
  

  <footer class="py-20">
      <Footer/>
    </footer>
    </main>
</template>
<script>
import Footer from "../components/layout/Footer.vue";
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDoc, // Obtenir un document d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
  where, // Permet de demander un filtrage pour une query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";


export default {
    name: "Profil",
    data() {
        // Les données
        return {
            user: null,
            listeUsers: [],
            userInfo: null,
            userSelected: null,
            libelle: null,
            chatFrom: null,
            chatTo: null,
            chat: [],
            discussion: null,
            message: null, // Message courant du chat/discussion
        };
    },
    mounted() {
        // Montage de la vue
        // Appel de la liste des users (Firestore)
        this.getUsers();
    },
    methods: {
        // Les fonctions
        // obtenir les utilisateurs de users
        async getUsers() {
            // Obtenir les inofrmations du user connecté
            await getAuth().onAuthStateChanged(function (user) {
                if (user) {
                    // Récupération du user connecté
                    this.user = user;
                }
            }.bind(this));
            // Informations des users de Firestore
            const firestore = getFirestore();
            // Collection users de Firestore
            const dbUsers = collection(firestore, "users");
            // Users triés sur leur login
            const q = query(dbUsers, orderBy("login", "asc"));
            // Liste synchronisée
            await onSnapshot(q, (snapshot) => {
                this.listeUsers = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                // Récupération de l'url des avatars
                this.listeUsers.forEach(function (user) {
                    // Obtenir le Cloud Storage
                    const storage = getStorage();
                    // Récupérer l'image par son nom de fichier
                    const spaceRef = ref(storage, "users/" + user.avatar);
                    // Récupération de l'url
                    getDownloadURL(spaceRef)
                        .then((url) => {
                        // Remplacer le nom du fichier par l'url
                        user.avatar = url;
                    })
                        .catch((error) => {
                        console.log("erreur downloadurl", error);
                    });
                });
                // Récupérer les infos complémentaires du user connecté
                this.userInfo = this.listeUsers.filter((user) => user.uid == this.user.uid);
                //console.log("userInfo", this.userInfo);
                // Suppression du user connecté de la liste
                this.listeUsers = this.listeUsers.filter((user) => user.uid != this.user.uid);
                //console.log("ListeUsers", this.listeUsers);
            });
        },
    },
    components: { Footer }
};
</script>