Aliciaivrc
#6978

Lucas_moramarco1-B1 — 15/03/2022
avec tous les tp à rendre la ouahh
Aliciaivrc — 15/03/2022
après moi du coup jv essayer de faire l'oral pour le truc de Malsot mais j'ai pas tout compris du coup jveux pas vous faire dla D mais bon
Aliciaivrc — 15/03/2022
ah mais tellement c'est abusé
c'est impossible de bien faire on a limite pas le temps de rendre les trucs tellement yen a
Lucas_moramarco1-B1 — 15/03/2022
ok stress pas ça sera surement mieu que si c'était nous qui le faisions
Aliciaivrc — 15/03/2022
pas sûr pcq le mode opératoire Bruno il m'a dit de chercher des règlementations sauf qu'avec régie publicitaire je trouve pas de règlementation mdr
Lucas_moramarco1-B1 — 15/03/2022
tu vas trouvé mdr je crois en toi
ça va mieu ta voiture
Aliciaivrc — 15/03/2022
j'y suis allée et il m'a juste remis de l'huile en disant que mon moteur consommé bcp mdr 🤡  il a pas vérifié si y'avait un soucis au joint ou si c'était percé  dessous donc j'espère que c'est pas le cas et que jsuis trql
Lucas_moramarco1-B1 — 15/03/2022
ok mdrr
Aliciaivrc — 15/03/2022
quand tu fais la maquette finale pense à faire des espaces pour la pub
déjà on en aura besoin et en plus on a besoin de le rendre à l'écrit demain pour le truc de malsit
Image
Lucas_moramarco1-B1 — 15/03/2022
oui ça marche
Aliciaivrc — 15/03/2022
impec
Lucas_moramarco1-B1 — 15/03/2022
des petites barres de pub comme sur les apps sur smatphone
Aliciaivrc — 15/03/2022
ouais c'est ça
genre en haut puis tu scroll et t'en mets un dans le contenu de la page aussi
faut en mettre plusieurs pour que ce soit un peu plus rentable
meme si ca le sera pas la
Lucas_moramarco1-B1 — 15/03/2022
mdrrrr ça me fume ta confiance en notre site
Aliciaivrc — 15/03/2022
Faut juste faire comme si ca allait marcher pour l'oral et la soutenance 🤣 
Lucas_moramarco1-B1 — 15/03/2022
Lucas_moramarco1-B1 — 17/03/2022
Image
Aliciaivrc — 08/04/2022
<template>
  <div class="home">
    <img src="../assets/logo.png" alt="" />
    <p>
      Travaux dirigés et travaux pratiques MMI 1 2021/2022 - R213 Développement
      Web
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
Lucas_moramarco1-B1 — 12/05/2022
alicia
Aliciaivrc — 12/05/2022
Oui
Lucas_moramarco1-B1 — 12/05/2022
c'était pour que tu m'envoies le paragraphe de index.php qui donne bien chaque donnée de météo j'ai pas tout qui fonctionne
Aliciaivrc — 12/05/2022
Le prof m'a dit de supprimer pour faire le truc d'après avec Besançon là vrmt il s'en fout mddr
Lucas_moramarco1-B1 — 12/05/2022
oui c vrai j'avais attendu
ta commencé le site de conte
Aliciaivrc — 12/05/2022
Après je l'ai gardé en local au cas où si tu veux mis ça sert a rien jpense
Lucas_moramarco1-B1 — 12/05/2022
nn cbon merci
Aliciaivrc — 12/05/2022
J'ai juste fait 2 résumés tout à L'heure j'ai pas commencé à coder
Et toi ?
Lucas_moramarco1-B1 — 12/05/2022
rien mdr
j'ai pas la force là
Aliciaivrc — 12/05/2022
Ça va être trop chiant jv vrmt faire un site tout péter on a même pas 2 jours pour faire nsm
Lucas_moramarco1-B1 — 12/05/2022
tu crois on demande par mail de rendre fin du weekend vu qu'on était pas là
Aliciaivrc — 12/05/2022
On peut essayer en vrai ca coûte rien, mais il avait vrmt l'air de dire qu'il allait corriger samedi matin donc jsp s'il va vouloir
Lucas_moramarco1-B1 — 12/05/2022
vasy
on essayey
je fais ou tu fais
Aliciaivrc — 12/05/2022
Vas y fais mais ça m'étonnerait qu'il voit avant demain, on lui en parlera demain
Lucas_moramarco1-B1 — 12/05/2022
okk
Lucas_moramarco1-B1 — Aujourd’hui à 14:54
ok
Aliciaivrc — Aujourd’hui à 14:55
<template>
  <h1>Profil</h1>
  <h2>jm-italia25</h2>
  <h3>Fortune</h3>
  <h3>Éti’quêtes abandonnées</h3>
  <h3>Éti’quêtes créées</h3>
  Afficher plus message.txt 3 Ko Lucas_moramarco1-B1 — Aujourd’hui à 14:58
  header.vue `<template>
    <div class="flex w-screen space-y-8 gap-x-60 bg-Primaire">
      <img class="h-20" src="/public/icon/logo-final.png" alt="Logo updayme" />
      <a class="h-full" href="#"
        ><img
          class="w-5"
          src="/public/icon/cloche.webp"
          alt="cloche de notification"
      /></a>
    </div>
  </template>
</template>
``
connex.vue
<template>
  <main>
    <body class="bg-Primaire">
      <h5 class="relative z-10">Se connecter</h5>
      <form @submit.prevent="onCnx()" class="absolute mt-64 z-10 text-Primaire">
        Afficher plus message.txt 5 Ko ﻿
        <template>
          <main>
            <body class="bg-Primaire">
              <h5 class="relative z-10">Se connecter</h5>
              <form
                @submit.prevent="onCnx()"
                class="absolute mt-64 z-10 text-Primaire"
              >
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <button class="btn btn-dark">Email :</button>
                  </div>
                  <input
                    class="form-control"
                    type="text"
                    v-model="user.email"
                    required
                  />
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <button class="btn btn-dark">Mot de passe :</button>
                  </div>
                  <input
                    class="form-control"
                    type="password"
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
                  <button class="float-left" @click="onDcnx()">
                    Deconnexion
                  </button>
                  <button variant="dark" class="float-right" type="submit">
                    Connexion
                  </button>
                </div>
              </form>
              <a href="Accueil.vue">
                <img
                  src="../../public/icon/logo-final.png"
                  class="relative -mt-64 z-20 w-40"
                  alt=""
                />
              </a>
              <img
                class="relative -mt-56"
                src="../../public/img/sign.jpg"
                alt=""
              />
            </body>
          </main>
        </template>
      </form>
    </body>
  </main>
</template>

<script>
// Bibliothèques Firebase  : import des fonctions
//  signInWithEmailAndPassword : Authentification avec email et mot de passe
//  getAuth : Fonction générale d'authentification
//  signOut : Se deconnecter
//  onAuthStateChanged : connaitre le statut de l'utilisateur (connecté ou non)
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  name: "Connexion",
  data() {
    // Données de la vue
    return {
      user: {
        // user se connectant
        email: null,
        password: null,
      },
    };
  },

  mounted() {
    // Montage de la vue
    // Rechercher si un user est déjà connecté
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "User déjà connecté : " + this.user.email;
    } else {
      this.message = "User non connecté : " + this.user.email;
    }
  },

  methods: {
    onCnx() {
      // Se connecter avec user et mot de passe
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          // Connexion OK
          console.log("user connecté", response.user);
          this.user = response.user;
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          // Erreur de connexion
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },
    onDcnx() {
      // Se déconnecter
      signOut(getAuth())
        .then((response) => {
          this.user = getAuth().currentUser;
          this.user = {
            email: null,
            password: null,
          };
          console.log("user deconnecté ", this.user);
          this.message = "user non connecté";
        })
        .catch((error) => {
          console.log("erreur deconnexion ", error);
        });
    },
  },
};
</script>