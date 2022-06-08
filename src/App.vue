<script setup>
import { RouterLink, RouterView } from "vue-router";
import BarreNav from "./components/BarreNav.vue";
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/Header.vue";
import Connex1 from "./views/Connex.vue";
</script>

<template>
  <header>
    <Header />
   
  </header>

  <RouterView v-if="logged"/>
  <Connex1 v-if="!logged"></Connex1>
        
  <div
    class="
      bg-white
      flex
      space-x-16
      py-5
      px-10
      w-full
      fixed
      bottom-0
      justify-center
      align-baseline
    "
  >
    <RouterLink to="/profil"
      ><img src="../public/icon/menu-profil.svg" class="h-6 w-auto" alt="icone menant à la page profil"
    /></RouterLink>
    <RouterLink to="/"
      ><img src="../public/icon/menu-quetes.svg" class="h-6 w-auto" alt="icone menant à la page quêtes"
    /></RouterLink>
    <RouterLink to="/social"
      ><img src="../public/icon/menu-communaute.svg" class="h-6 w-auto" alt="icone menant à la page social"
    /></RouterLink>
    <RouterLink to="/parametres"
      ><img
        src="../public/icon/menu-parametres.svg"
        class="h-2 w-auto mt-2"
        alt="icone menant aux paramètres"
    /></RouterLink>
  </div>
  <footer></footer>
</template>


<script>

import { emitter } from "./main.js"
import {
getFirestore,
collection,
onSnapshot,
query,
where
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'

import {
getAuth,
signOut
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js'

export default {
  components: {Connex1},
  data(){
      return{
        Menuopen:false,
        user:{
            password:null,
            email:null,
            login:null,
            id:null,
        },
        login:'',
        logged:false,  
        userInfo:null,
        isAdmin:false
      }
  },
  mounted(){
    this.getUserConnect();


    emitter.on('connectUser', e =>{
      this.user = e.user;
      console.log('App => Reception user connecté', this.user);
      this.getUserInfo(this.user);
    })
    emitter.on('deConnectUser', e =>{
      this.user = e.user;
      console.log('App => Reception user deconnecté', this.user);
      this.userInfo = null,
      this.isAdmin = false,
      this.logged = false
    })
  },
  methods:{
        async getUserConnect(){
        await getAuth().onAuthStateChanged(function(user){
            if(user){
                this.user = user;
                this.getUserInfo(this.user);
            }
        }.bind(this));
        },
        async getUserInfo(user){
        const firestore = getFirestore();
        const dbUsers = collection(firestore, "user");
        const q = query(dbUsers, where("uid", "==", user.uid));
        await onSnapshot(q, (snapshot)=>{
            this.userInfo = snapshot.docs.map(doc=>({
            id:doc.id, ...doc.data()
            }));
            // console.log("userInfo", this.userInfo);
            this.login = this.userInfo[0].login;
            this.isAdmin = this.userInfo[0].admin;
            this.logged = true;
            // const storage = getStorage();
            // const spaceRef = ref(storage, 'users/'+this.userInfo[0].avatar);
            // getDownloadURL(spaceRef)
            // .then((url)=>{
            //     this.avatar = url;
            // })
            // .catch((error)=>{
            //     console.log('erreur downloadUrl', error);
            // })
        });
        },
        onDcnx(){
            signOut(getAuth())
            .then(response =>{
                this.message = "User non connecté";
                this.user = {
                    email:null,
                    password:null
                };
                emitter.emit('deConnectUser', {user:this.user});
            })
            .catch(error=>{
                console.log('erreur deconnexion', error);
            })
        },
    },
  
} 
</script>