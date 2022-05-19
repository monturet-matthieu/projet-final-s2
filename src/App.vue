<script setup>
import { RouterLink, RouterView } from "vue-router";
import BarreNav from "./components/BarreNav.vue";
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/Header.vue";
</script>

<template>
  <header>
    <Header />
    <nav class="flex space-x-6 mb-5 w-screen pt-4">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/mentions">Mentions légales</RouterLink>
      <RouterLink to="/profil">Profil</RouterLink>
      <RouterLink to="/social">Social</RouterLink>
      <RouterLink to="/parametres">Paramètres</RouterLink>
      <RouterLink to="/cgu">CGU</RouterLink>
      <br>
      <RouterLink to="/connexion">Se connecter</RouterLink>
      <BarreNav />
      
    </nav>
  </header>
  <Footer />
  <RouterView />
</template>