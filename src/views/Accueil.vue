<script setup>
import Etiquete from "../components/quetes/Etiquete.vue";
import Etiquete1 from "../components/quetes/Etiquete.vue";
</script>

<template>
  <main>
    <body>
      <h1 class="font-bold">Éti’quêtes à effectuer</h1>
      <div class="flex mx-16 my-4 justify-center gap-2 bg-Boutons p-2 rounded-14xl">
        <RouterLink class="bg-Primaire p-3 rounded-6xl" to="/">Aléatoires</RouterLink>
        <RouterLink class="p-3 rounded-6xl" to="/quetesperso">Personnelles</RouterLink>
      </div>
      <RouterLink to="/ajoutquete"><img src="../../public/icon/new-message.svg" class="fixed left-10 right-3" alt="icone menant vers la page d'ajout de quêtes"></RouterLink>

      <h3>JOURNALIÈRES</h3>
        <!-- affichage liste synchro -->
<div class="space-y-10 pl-40   flex flex-col    w-3/4 h-auto  ">
  <RouterLink to="/" v-for="quetes in orderByDuree"  :key="quetes"
        ><Etiquete1 v-if="quetes.duree === 'jour' "  :nom="quetes.nom" :categorie="quetes.categorie" :xp="quetes.xp"
      /></RouterLink>
<RouterView/>      </div>
      <h3>HEBDOMADAIRES</h3>
    <div class="space-y-10 pl-40   flex flex-col    w-3/4 h-auto  ">
  <RouterLink to="/" v-for="quetes in orderByDuree"  :key="quetes"
        ><Etiquete1 v-if="quetes.duree === 'semaine' "  :nom="quetes.nom" :categorie="quetes.categorie" :xp="quetes.xp"
      /></RouterLink>
<RouterView/>      </div>
      <h3>MENSUELLES</h3>
      <div class="space-y-10 pl-40   flex flex-col    w-3/4 h-auto  ">
  <RouterLink to="/" v-for="quetes in orderByDuree"  :key="quetes"
        ><Etiquete1 v-if="quetes.duree === 'mois' "  :nom="quetes.nom" :categorie="quetes.categorie" :xp="quetes.xp"
      /></RouterLink>
<RouterView/>      </div>
      <h2>Archives</h2>
    </body>
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
      quetes:{
        nom:null,
        duree:null,
        categorie:null,
        etat:null,
        xp:null,

      }
      
      
    };
  },
  computed: {

    orderByDuree: function () {

      return this.listeQuetes.sort(function (quetes) {
 
        if (quetes.duree === "jour") return -1;

        return 0;
      });
    }},
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
        
        console.log('listeQuetes', this.listeQuetes);
      });
    },
    
    async createQuetes(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbQuetes= collection(firestore, "quetes");
      const dbEtat= collection(firestore, "etat");
      const dbDuree= collection(firestore, "duree");
      const dbCategorie= collection(firestore, "categorie");
      const dbXp= collection(firestore, "xp");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement    
      const docRef = await addDoc(dbQuetes, {
          nom: this.nom,
          etat:this.etat,
          categorie:this.categorie,
          duree:this.duree,
          xp:this.xp,

          
      })

     
      // const docRef = await addDoc(dbEtat, {        
      //    etat: this.etat
         
      // })
//  duree: this.duree
//           xp: this.xp
//           categorie: this.categorie
      console.log('document créé avec le id : ', docRef.id);
    },

    async updateQuetes(quetes){
        // Obtenir Firestore
        const firestore = getFirestore();
        const docRef = doc(firestore, "quetes", quetes.id);
        // On passe en paramètre format json
        // Les champs à mettre à jour
        await updateDoc(docRef, {
            nom: quetes.nom
        }) 
      },

      async deleteQuetes(quetes){
          // Obtenir Firestore
          const firestore = getFirestore();
          const docRef = doc(firestore, "quetes", quetes.id);
          // Suppression du pays référencé
          await deleteDoc(docRef);
        },
    
  },
  
};
</script>