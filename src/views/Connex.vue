<template>
  <main>
    <body class="bg-Primaire">
      <form
        @submit.prevent="onCnx()"
        class="absolute mt-64 content-center z-10 text-Primaire align-middle"
      >
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button class="btn btn-dark"></button>
          </div>
          <input
            class="
              form-control
              bg-Primaire
              text-Secondaire
              border-2
              rounded-14xl
              ml-16
              w-56
              h-10
              z-30
              align-middle
            "
            placeholder="E-mail"
            type="text"
            v-model="user.email"
            required
          />
        </div>
        <div class="input-group mb-3 ml-16">
          <div class="input-group-prepend">
            <button class="btn btn-dark"></button>
          </div>
          <input
            class="
              form-control
              rounded-14xl
              w-56
              bg-Primaire
              text-Secondaire
              h-10
            "
            type="password"
            placeholder="Mot de passe"
            v-model="user.password"
            required
          />
        </div>
        <div
          class="alert alert-warning text-center mb-3"
          v-if="message != null"
        >
          {{ message }}
        </div>
        <div>
          <button
            variant="dark"
            class="
              float-right
              bg-Boutons
              w-48
              h-14
              align-middle
              px-6
              rounded-14xl
              font-bebas-neue
              text-4xl
            "
            type="submit"
          >
            Se connecter
          </button>
        </div>
      </form>
      <router link to="/">
        <img
          src="../../public/icon/logo-final-w.svg"
          class="relative -mt-44 ml-3 w-20 z-20"
          alt=""
        />
      </router>

      <img
        class="relative -mt-48 pt-20 mb-32"
        src="../../public/img/sign.jpg"
        alt=""
      />
    </body>
  </main>
</template>

<script>
import { emitter } from "../main.js";
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  getDoc,
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  inMemoryPersistence,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  setPersistence,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { RouterLink } from "vue-router";
export default {
  components: {},
  data() {
    return {
      SignIn: false,
      user: {
        password: null,
        email: null,
        login: null,
      },
      password2: null,
      message: null,
    };
  },
  methods: {
    // onCnx(){
    //     signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
    //     .then((response)=>{
    //         console.log('user connecté', response.user);
    //         this.user = response.user;
    //         this.message = "User connecté : " +this.user.email;
    //     })
    //     .catch((error)=>{
    //         console.log('erreur de connexion', error);
    //         this.message = "Erreur d'authentification";
    //     })
    // },
    onCnx() {
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          this.user = response.user;
          console.log("user", this.user);
          emitter.emit("connectUser", { user: this.user });
          this.message = "user connecté : " + this.user.email;
        })
        .catch((error) => {
          console.log("erreur connexion", error);
          this.message = "erreur d'authentification";
        });
    },
    onCreate() {
      if (this.user.password === this.password2) {
        createUserWithEmailAndPassword(
          getAuth(),
          this.user.email,
          this.user.password
        )
          .then((response) => {
            // Signed in
            const user = response.user;
            this.writeUserData(user);
            // ...
          })
          .catch((error) => {
            console.log("erreur création", error);
            this.message = "erreur de création";
            // ..
          });
      } else {
        this.message = "password pas cohérent";
        console.log("mdp mauvais");
      }
    },
    async writeUserData(user) {
      const firestore = getFirestore();
      const dbUser = collection(firestore, "user");
      const docRef = await addDoc(dbUser, {
        login: this.user.login,
        email: this.user.email,
        uid: user.uid,
        admin: false,
      });
      console.log("document créé avec le id : ", docRef.id);
      emitter.emit("connectUser", { user: this.user });
    },
  },
};
</script>