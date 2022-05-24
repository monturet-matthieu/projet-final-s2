 <script setup>
import { RouterLink, RouterView } from "vue-router";
import BarreNav from "./components/BarreNav.vue";
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/Header.vue";
</script>

<template>
  <header>
    <Header />
    <nav class="flex-col space-x-6 mb-5 w-screen pt-4 bg-Primaire">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/mentions">Mentions légales</RouterLink>
      <RouterLink to="/profil">Profil</RouterLink>
      <RouterLink to="/social">Social</RouterLink>
      <RouterLink to="/parametres">Paramètres</RouterLink>
      <RouterLink to="/cgu">CGU</RouterLink>
      <br />
      <RouterLink to="/connexion">Se connecter</RouterLink>
      <BarreNav />
    </nav>
  </header>

  <RouterView />

  <div class="bg-white flex space-x-16 py-5 px-10 fixed bottom-0">
    <img src="../public/icon/menu-profil.webp" class="h-6 w-auto" alt="" />
    <img src="../public/icon/menu-quetes.webp" class="h-6 w-auto" alt="" />
    <img src="../public/icon/menu-communaute.webp" class="h-6 w-auto" alt="" />
    <img src="../public/icon/menu-parametres.webp" class="h-2 w-auto" alt="" />
  </div>
  <footer>
    <Footer />
  </footer>
</template> 