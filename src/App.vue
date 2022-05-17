<script setup>
import { RouterLink, RouterView } from 'vue-router'

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
      </nav>
  </header>

  <RouterView />
</template>