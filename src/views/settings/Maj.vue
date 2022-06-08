<template>
  <main class="">
    <h2 class="font-gothic mt-10 font-bold text-2xl ml-5">Mise à jour</h2>
    <h3 class="font-gothic mt-10 font-bold text-xl ml-5">
      Denière mise à jour : 10 juin 2022
    </h3>
    <p class="ml-5 mt-10 w-3/4">
      Description : le site a été publié dans sa totalité
    </p>

    <footer class="mt-5 mb-16">
      <Footer />
    </footer>
  </main>
</template>

<script>
import Formulaire from "/src/components/Formulaire.vue";
import Footer from "/src/components/layout/Footer.vue";
export default {
  name: "Contact",
  components: { Formulaire, Footer },
};
</script>