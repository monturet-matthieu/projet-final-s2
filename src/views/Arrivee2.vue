<template>
  <div class="font-karla">
    <img class="p-4" src="/public/img/arrivee2.webp" alt="Robot explicatif" />

    <h3 class="text-2xl font-bold text-center">Complete ton profil</h3>
    <h4 class="text-xl font-bold text-Important text-center">1/3 - Complété</h4>

    <h2 class="font-extrabold text-3xl font-gothic mt-10 mb-1 ml-8">
      Complète ton profil
    </h2>
    <h3>Avatar</h3>
    
  <div class="font-karla p-5 space-y-10">
    <div class="grid-cols-3 md:px-10  grid text-center  px-3   w-full justify-center">
      <h4>Femme</h4>
      <h4>Jeune</h4>
      <h4>Homme</h4>
    </div>
    <div v-for="user in listeUsers" :key="user.id">
    <h4 class="grid-cols-0">Peau claire - cheveux blonds</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
      <img src="/public/img/avatars/f-peau1-cheveux1.png" @click.prevent="createAvatar(user.avatar)" alt="">
      <img src="/public/img/avatars/nb-peau1-cheveux1.png" @click.prevent="createAvatar(user.avatar)" alt="">
      <img src="/public/img/avatars/h-peau1-cheveux1.png" @click.prevent="createAvatar(user.avatar)" alt="">
    
    </div>
    
    <h4>Peau claire - cheveux chatains</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
       <img src="/public/img/avatars/f-peau1-cheveux2.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/nb-peau1-cheveux2.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/h-peau1-cheveux2.png" @click.prevent="createAvatar(user.avatar)" alt="">
    </div>
   
    
    <h4>Peau claire - cheveux bruns</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
      <img src="/public/img/avatars/f-peau1-cheveux3.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/nb-peau1-cheveux3.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/h-peau1-cheveux3.png" @click.prevent="createAvatar(user.avatar)" alt="">
    </div>
    
    
    <h4>Peau mate - cheveux blond</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
      <img src="/public/img/avatars/f-peau2-cheveux1.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/nb-peau2-cheveux1.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/h-peau2-cheveux1.png" @click.prevent="createAvatar(user.avatar)" alt="">
    </div>
    
    
    <h4>Peau mate - cheveux chatains</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
      <img src="/public/img/avatars/f-peau2-cheveux2.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/nb-peau2-cheveux2.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/h-peau2-cheveux2.png" @click.prevent="createAvatar(user.avatar)" alt="">
    </div>
    
   
    <h4>Peau mate - cheveux bruns</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
      <img src="/public/img/avatars/f-peau2-cheveux3.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/nb-peau2-cheveux3.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/h-peau2-cheveux3.png" @click.prevent="createAvatar(user.avatar)" alt="">
    </div>
    
   
    <h4>Peau foncée - cheveux blonds</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
       <img src="/public/img/avatars/f-peau3-cheveux1.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/nb-peau3-cheveux1.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/h-peau3-cheveux1.png" @click.prevent="createAvatar(user.avatar)" alt="">
    </div>
   
    
    <h4>Peau foncée - cheveux chatains</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
        <img src="/public/img/avatars/f-peau3-cheveux2.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/nb-peau3-cheveux2.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/h-peau3-cheveux2.png" @click.prevent="createAvatar(user.avatar)" alt="">
    </div>
  
    
    <h4>Peau foncée - cheveux bruns</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
      <img src="/public/img/avatars/f-peau3-cheveux3.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/nb-peau3-cheveux3.png" @click.prevent="createAvatar(user.avatar)" alt="">
    <img src="/public/img/avatars/h-peau3-cheveux3.png" @click.prevent="createAvatar(user.avatar)" alt="">
    </div>
    </div>
    

  </div>
    <h4>Couleur de peau</h4>
    <h4>Cheveux</h4>
    <div class="flex flex-row justify-center mt-6">
      <RouterLink to="Arrivee1">
        <img
          class="w-14 mr-24"
          src="/public/icon/precedent-orange.svg"
          alt="precedent"
      /></RouterLink>
      <RouterLink to="Arrivee3">
        <img class="w-14 ml-24" src="/public/icon/next.svg" alt="suivant" />
      </RouterLink>
    </div>
    <img
      class="pl-20 pr-20 mt-10 mb-10"
      src="/public/img/arrivee2-repaire.webp"
      alt="page arrive 2/3"
    />
  </div>
  <a href="https://www.google.com/intl/fr_fr/adsense/start/" target="_blank"
    ><img
      src="/public/img/ads-l.png"
      border="0"
      alt="cadrant publicitaire"
      class="justify-center p-8"
  /></a>
</template>

<script>
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
  name: "Arrivee2",
  data() {
    // Les données
    return {
      user: null, // User connecté
      listeUsers: [], // Liste des utilisateurs (Firestore)
      userInfo: null, // Informations complémentaires du user connecté
      userSelected: null, // L'utilisateur de la liste sélectionné
      libelle: null, // Libelle de la nouvelle discussion à créer

      chatFrom: null, // Les chats de l'utilisataur connecté vers celui sélectionné
      chatTo: null, // Les chats des autres utilisateurs vers celui connecté
      chat: [], // Tous les chats utilisateur connecté et sélectionné

      discussion: null, // chat/discussion sélectionnée

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
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
          }
        }.bind(this)
      );

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
        this.userInfo = this.listeUsers.filter(
          (user) => user.uid == this.user.uid
        );
        //console.log("userInfo", this.userInfo);
        // Suppression du user connecté de la liste
        this.listeUsers = this.listeUsers.filter(
          (user) => user.uid != this.user.uid
        );
        //console.log("ListeUsers", this.listeUsers);
      });
    },
    async createAvatar(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbUser= collection(firestore, "users");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement    
      const docRef = await addDoc(dbUser, {
          url: user.avatar   
      });
    },
  } 
}
</script>