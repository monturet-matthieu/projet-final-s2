<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/mentions">Mentions légales</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>