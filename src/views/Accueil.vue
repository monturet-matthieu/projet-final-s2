<script setup>
import Etiquete from "../components/quetes/Etiquete.vue";
</script>

<template>
  <main>
    <body>
      <h1 class="font-bold">Éti’quêtes à effectuer</h1>
      <div class="flex mx-16 my-4 justify-center gap-2 bg-Boutons p-2 rounded-14xl">
        <RouterLink class="bg-Primaire p-3 rounded-6xl" to="/">Aléatoires</RouterLink>
        <RouterLink class="p-3 rounded-6xl" to="/quetesperso">Personnelles</RouterLink>
      </div>
      <RouterLink to="/ajoutquete"><img src="../../public/icon/new-message.svg" class="fixed left-10 right-3" alt="icone menant vers la page d'ajout de quêtes"></RouterLink>

      <h3>JOURNALIÈRES</h3>
        <Etiquete />
      <h3>HEBDOMADAIRES</h3>
      <h3>MENSUELLES</h3>
      <h2>Archives</h2>
    </body>
  </main>
</template>

<script>
</script>