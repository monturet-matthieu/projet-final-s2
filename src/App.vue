<script setup>
import { RouterLink, RouterView } from "vue-router";
import BarreNav from "./components/BarreNav.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/mentions">Mentions légales</RouterLink>
      <RouterLink to="/profil">Profil</RouterLink>
      <RouterLink to="/social">Social</RouterLink>
      <RouterLink to="/parametres">Paramètres</RouterLink>
      <RouterLink to="/cgu">CGU</RouterLink>
      <BarreNav />

      <Footer />
    </nav>
  </header>

  <RouterView />
</template>