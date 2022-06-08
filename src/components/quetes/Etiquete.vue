<template>
    <div>
        <div class="bg-bleu80% flex pb-2 -ml-16 rounded-9xl ">
            <img class="ml-6" src="../../../public/icon/rond-etiquete.svg" alt="rond de validation vide">
            <div class="bg-white flex flex-col ml-6 mt-2 m-4  rounded-9xl">
                <div class="flex gap-20  mr-8 mt-2">
                    <h5 class="text-gray-500 ml-5 font-light justify-start">{{categorie}}</h5>
                    <span class="text-Important font-medium justify-end">{{xp}} XP</span>
                </div>

                <div class="mt-4">
                    <h3 class="text-Texte text-center font-semibold">{{nom}}</h3>
                </div> 

                <div class="pb-0.5 bg-gray-300 mx-12 mt-6 mb-4"></div>

                <div class="flex space-x-8 justify-center mb-4">
                    <img class="w-8" src="../../../public/icon/quete-info.svg" alt="Bouton redirigeant vers les informations de la quête">
                    <img src="../../../public/icon/quete-changement.svg" alt="Bouton permettant de changer la quête en cours">
                    <img src="../../../public/icon/quete-parametres.svg" alt="Bouton permettant de régler les paramètres de la quête">
                    <img src="../../../public/icon/quete-poubelle.svg" alt="Bouton permettant de supprimer la quête" @click.prevent="deleteQuetes(quetes)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
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

export default{
    props: {
        nom: String,
        categorie: String,
        xp: Number
    },

data() {
    return {
      listeQuetes: [],
      nomQuetes:null
      
    };
  },

methods: {
    async deleteQuetes(quetes){
          // Obtenir Firestore
          const firestore = getFirestore();
          const docRef = doc(firestore, "quetes", quetes);
          // Suppression du pays référencé
          await deleteDoc(docRef);
        }
}
}
</script>