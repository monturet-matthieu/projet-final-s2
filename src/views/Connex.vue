<template>
<main>
    
    <body class="bg-Primaire">
        <h5 class="relative z-10">Se connecter</h5>
            <form @submit.prevent="onCnx()" class="absolute mt-64 z-10 text-Primaire">
                <div class="input-group mb-3">            
                    <div class="input-group-prepend">
                        <button class="btn btn-dark">Email :</button>
                    </div>
                    <input class="form-control" type="text" v-model="user.email" required />
                </div>
                <div class="input-group mb-3 ">
                    <div class="input-group-prepend">
                        <button  class="btn btn-dark">Mot de passe :</button>
                    </div>
                    <input class="form-control" type="password" v-model="user.password" required />
                </div>
                <div class="alert alert-warning text-center mb-3" v-if="message!=null" >
                    {{ message }}
                </div>
                <div>
                    <button class="float-left" @click="onDcnx()">
                        Deconnexion
                    </button>
                    <button variant="dark" class="float-right" type="submit">
                        Connexion
                    </button>
                </div>
            </form>
        <a href="Accueil.vue">
            <img src="../../public/icon/logo-final.png" class="relative -mt-64 z-20 w-40" alt="">
        </a>
        <img class="relative -mt-56" src="../../public/img/sign.jpg" alt="">
     
    </body>
    
</main>
    

</template>

<script>
// Bibliothèques Firebase  : import des fonctions
//  signInWithEmailAndPassword : Authentification avec email et mot de passe
//  getAuth : Fonction générale d'authentification
//  signOut : Se deconnecter
//  onAuthStateChanged : connaitre le statut de l'utilisateur (connecté ou non)
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


    export default {   
        name: 'Connexion',
        data(){ // Données de la vue
          return{                
                user:{          // user se connectant
                    email:null,
                    password:null
                },
            }
        },

        mounted(){ // Montage de la vue
            // Rechercher si un user est déjà connecté
                let user = getAuth().currentUser;
                if(user){
                    this.user = user;
                    this.message = "User déjà connecté : "+this.user.email;
                }else{
                    this.message = "User non connecté : "+this.user.email;
                }
        },

        methods:{
            onCnx(){                
                // Se connecter avec user et mot de passe           
                signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
                .then((response)=>{
                    // Connexion OK
                    console.log('user connecté', response.user);
                    this.user = response.user;
                    this.message = "User connecté : "+this.user.email;
                })
                .catch((error) =>{
                    // Erreur de connexion
                    console.log('Erreur connexion', error);
                    this.message = "Erreur d'authentification";
                })
            },
            onDcnx(){
                // Se déconnecter
                signOut(getAuth())
                .then(response =>{
                    this.user = getAuth().currentUser;
                    this.user = {
                        email:null,
                        password:null
                    };
                    console.log("user deconnecté ", this.user);        
                    this.message = 'user non connecté';
                })
                .catch(error=>{
                    console.log('erreur deconnexion ', error);
                })

            },
        }
    }

</script>