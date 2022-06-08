<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/Header.vue";
</script>

<template>
  <header>
    <Header />
  </header>

  <RouterView />

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
      ><img
        src="../public/icon/menu-profil.svg"
        class="h-6 w-auto"
        alt="icone menant à la page profil"
    /></RouterLink>
    <RouterLink to="/"
      ><img
        src="../public/icon/menu-quetes.svg"
        class="h-6 w-auto"
        alt="icone menant à la page quêtes"
    /></RouterLink>
    <RouterLink to="/social"
      ><img
        src="../public/icon/menu-communaute.svg"
        class="h-6 w-auto"
        alt="icone menant à la page social"
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