<script setup>
</script>

<template>

<!-- liste synchro des quetes -->

<div class="py-20">
  <div class="px-10">
            <h5 class="font-league-gothic text-2xl text-violet">Liste des quetes - Liste synchronisée</h5>
            </div>
            <form class='mb-3 px-10'>
            <h3 class="font-league-gothic text-xl text-fushia px-10">Nouveaux quetes</h3>
            <div class="input-group px-10">
                <div class="input-group-prepend">
                <span class="input-group-text">Nom</span>
                </div>
                <input name="nom" type="text" v-model='nom' class="form-control w-96" required  />
                <label for="nom">Nom </label>

                <input name="categorie" type="text" v-model='categorie' class="form-control" required />
                <label for="categorie"> Categorie </label>

                <input name="etat" type="text" v-model='etat' class="form-control" required />
                <label for="etat">Etat </label>

                <input name="duree" type="text" v-model='duree' class="form-control" required />
                <label for="duree">duree </label>

                <input name="xp" type="number" v-model='xp' class="form-control" required />
                <label for="xp">xp </label>

                <button class="border-violet" type="button"  @click='createQuetes()' title="Création">
                <img src="../../public/icon/add.svg" class="w-7" alt="icone d'ajout d'une quete dans la liste">
                </button>
            </div>
            </form>
            <table class="table w-full text-center">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Nom</th>
                <th scope="col">Catégorie</th>
                <th scope="col">Durée</th>
                <th scope="col">État</th>
                <th scope="col">XP</th>
                </tr>
            </thead>
            <tbody>
              
                <tr v-for='quetes in listeQuetes' :key='quetes.id'>
                <td>
                    <input  class="w-96" type='text' v-model='quetes.nom'  />
                </td>
                <td >
                    <input type='text' v-model='quetes.categorie'  />
                </td>
                <td >
                    <input type='text' v-model='quetes.duree'  />
                </td>
                
                <td>
                     <input type='text' v-model='quetes.etat'  />
                </td>
                <td>
                     <input type='text' v-model='quetes.xp'  />
                </td>
                </tr>
            </tbody>
            </table>
            <hr/>
</div>
<!-- affichage liste synchro -->
<!-- <div class="md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:px-10 px-3 md:grid    z-20 relative w-full justify-center"><RouterLink to="/artiste" v-for="artistes in listeArtistes" :key="artistes"
        ><Card2 :nom="quetes.nom" 
      /></RouterLink>
<RouterView/>      </div> -->



    
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
  components: {
  },

  orderBysexe: function () {

      return this.listeQuetes.sort(function (quetes) {
 
        if (quetes.sexe === true ) return -1;

        return 0;
      });
    },
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