<script setup>
import Etiquete1 from "../components/quetes/Etiquete.vue";
import Footer from "../components/layout/Footer.vue";
</script>

<template>
  <main>
    <img
      class="p-5 w-full"
      src="/public/img/barre-progression.png"
      alt="barre de progression"
    />
    <body>
      <h1 class="font-bold">Éti’quêtes à effectuer</h1>
      <img src="/public/gif/quests.gif" class="w-60 mx-auto" alt="" />
      <div
        class="flex mx-16 my-4 justify-center gap-2 bg-Boutons p-2 rounded-14xl"
      >
        <RouterLink class="bg-Primaire p-3 rounded-6xl" to="/"
          >Aléatoires</RouterLink
        >
        <RouterLink class="p-3 rounded-6xl" to="/quetesperso"
          >Personnelles</RouterLink
        >
      </div>
      <RouterLink to="/ajoutquete"
        ><img
          src="../../public/icon/ajout.png"
          class="fixed left-72 bottom-24"
          alt="icone menant vers la page d'ajout de quêtes"
      /></RouterLink>

      <div>
        <div class="flex space-x-6 mt-10">
          <h3
            class="
              font-gothic
              uppercase
              text-Secondaire
              font-bold
              text-lg
              ml-4
              mb-4
            "
          >
            JOURNALIÈRES
          </h3>
          <img class="mb-8 -mt-2" src="../../public/icon/quot.svg" alt="" />
        </div>

        <!-- affichage liste synchro -->
        <div class="space-y-10 flex flex-col w-10/12">
          <div v-for="quetes in Quot" :key="quetes">
            <Etiquete1
              :nom="quetes.nom"
              :categorie="quetes.categorie"
              :xp="quetes.xp"
            />
          </div>
          <RouterView />
        </div>

        <div class="flex justify-end space-x-6 mr-4 mt-10">
          <img class="mb-8 -mt-2" src="../../public/icon/hebd.svg" alt="" />
          <h3
            class="
              font-gothic
              uppercase
              text-Secondaire
              font-bold
              text-lg
              ml-4
              mb-4
            "
          >
            HEBDOMADAIRES
          </h3>
        </div>

        <div class="flex flex-col space-y-10 w-10/12">
          <div v-for="quetes in Hebd" :key="quetes">
            <Etiquete1
              :nom="quetes.nom"
              :categorie="quetes.categorie"
              :xp="quetes.xp"
            />
          </div>
          <RouterView />
        </div>

        <div class="flex space-x-6 mr-4 mt-10">
          <h3
            class="
              font-gothic
              uppercase
              text-Secondaire
              font-bold
              text-lg
              ml-4
              mb-4
            "
          >
            MENSUELLES
          </h3>
          <img class="mb-8 -mt-2" src="../../public/icon/mens.svg" alt="" />
        </div>

        <div class="space-y-10 flex flex-col w-10/12">
          <div v-for="quetes in Mens" :key="quetes">
            <Etiquete1
              :nom="quetes.nom"
              :categorie="quetes.categorie"
              :xp="quetes.xp"
            />
          </div>
          <RouterView />
        </div>
      </div>
    </body>
    <footer class="py-20">
      <Footer />
    </footer>
  </main>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  query,
  orderBy,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  data() {
    return {
      listeQuetes: [],
      quetes: {
        nom: null,
        duree: null,
        categorie: null,
        etat: null,
        xp: null,
      },
      qQuot: "jour",
      qHebd: "semaine",
      qMens: "mois",
    };
  },
  computed: {
    Quot() {
      let query = this.qQuot;
      return this.listeQuetes.filter(function (quetes) {
        return quetes.duree.includes(query);
      });
    },
    Hebd() {
      let query = this.qHebd;
      return this.listeQuetes.filter(function (quetes) {
        return quetes.duree.includes(query);
      });
    },
    Mens() {
      let query = this.qMens;
      return this.listeQuetes.filter(function (quetes) {
        return quetes.duree.includes(query);
      });
    },
  },
  mounted() {
    this.getQuetes();
  },
  methods: {
    async getQuetes() {
      const firestore = getFirestore();
      const dbQuetes = collection(firestore, "quetes");
      const q = query(dbQuetes, orderBy("nom", "asc"));

      await onSnapshot(q, (snapshot) => {
        this.listeQuetes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // console.log("listeQuetes", this.listeQuetes);
      });
    },

    async createQuetes() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbQuetes = collection(firestore, "quetes");
      const dbEtat = collection(firestore, "etat");
      const dbDuree = collection(firestore, "duree");
      const dbCategorie = collection(firestore, "categorie");
      const dbXp = collection(firestore, "xp");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dbQuetes, {
        nom: this.nom,
        etat: this.etat,
        categorie: this.categorie,
        duree: this.duree,
        xp: this.xp,
      });

      // const docRef = await addDoc(dbEtat, {
      //    etat: this.etat

      // })
      //  duree: this.duree
      //           xp: this.xp
      //           categorie: this.categorie
      // console.log("document créé avec le id : ", docRef.id);
    },

    async updateQuetes(quetes) {
      // Obtenir Firestore
      const firestore = getFirestore();
      const docRef = doc(firestore, "quetes", quetes.id);
      // On passe en paramètre format json
      // Les champs à mettre à jour
      await updateDoc(docRef, {
        nom: quetes.nom,
      });
    },

    async deleteQuetes(quetes) {
      // Obtenir Firestore
      const firestore = getFirestore();
      const docRef = doc(firestore, "quetes", quetes.id);
      // Suppression du pays référencé
      await deleteDoc(docRef);
    },
  },
};
</script>