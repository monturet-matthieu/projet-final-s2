<template>
    <div>
        <div class="bg-bleu80% flex pb-2 pr-24 -ml-16 rounded-9xl ">
            <img class="ml-6" src="../../../public/icon/rond-etiquete.svg" alt="rond de validation vide">
            <div class="bg-white w-full px-10 ml-6 mt-2 s rounded-9xl">
                <div class="flex w-full space-x-14 mr-14 mt-2">
                    <h5 class="text-gray-500 ml-5 left-5 w-20 font-light justify-start">{{categorie}}</h5>
                    <span class="text-Important w-20  font-medium justify-end">{{xp}} XP</span>
                </div>

                <div class="mt-4">
                    <h3 class="text-Texte text-center font-semibold">{{nom}}</h3>
                </div> 

                <div class="pb-0.5 bg-gray-300 mx-12 mt-6 mb-4"></div>

                <div class="flex space-x-8 justify-center mb-4"> <!-- v-for="quetes in listeQuetes" :key="quetes" -->
                    <img class="w-8" src="../../../public/icon/quete-info.svg" alt="Bouton redirigeant vers les informations de la quête">
                    <img src="../../../public/icon/quete-changement.svg" alt="Bouton permettant de changer la quête en cours">
                    <button type="button" @click.prevent="updateQuetes(quetes)"><img src="../../../public/icon/quete-parametres.svg" alt="Bouton permettant de régler les paramètres de la quête"></button>
                    <button type="button" @click.prevent="deleteQuetes(quetes)"><img src="../../../public/icon/quete-poubelle.svg" alt="Bouton permettant de supprimer la quête"></button>
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
            this.listeQuetes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        });
        },

        async updateQuetes(quetes) {
        // Obtenir Firestore
        const firestore = getFirestore();
        const docRef = doc(firestore, "quetes", quetes);
        // On passe en paramètre format json
        // Les champs à mettre à jour
        await updateDoc(docRef, {
            nom: quetes.nom,
            categorie: quetes.categorie,
            duree: quetes.duree,
        });
        },
        async deleteQuetes(quetes) {
        const firestore = getFirestore();
        const docRef = doc(firestore, "quetes", quetes);
        await deleteDoc(docRef);
        },
    }
}
</script>