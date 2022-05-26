<template>
  <div class="font-karla">
    <img class="p-4" src="/public/img/arrivee2.webp" alt="Robot explicatif" />

    <h3 class="text-2xl font-bold text-center">Complete ton profil</h3>
    <h4 class="text-xl font-bold text-Important text-center">1/3 - Complété</h4>

    <h2 class="font-extrabold text-3xl font-gothic mt-10 mb-1 ml-8">
      Complète ton profil
    </h2>
    <h3>NOM</h3>
    <h4>Avatar</h4>
    <h4>Couleur de peau</h4>
    <h4>Cheveux</h4>
    <div class="flex flex-row justify-center mt-6">
      <a href="./Arrivee1">
        <img
          class="w-14 mr-24"
          src="/public/icon/precedent-orange.webp"
          alt="precedent"
      /></a>
      <a href="./Arrivee3">
        <img class="w-14 ml-24" src="/public/icon/next.webp" alt="suivant" />
      </a>
    </div>
    <img
      class="pl-20 pr-20 mt-10 mb-10"
      src="/public/img/arrivee2-repaire.webp"
      alt="page arrive 2/3"
    />
  </div>
  <a href="https://www.google.com/intl/fr_fr/adsense/start/" target="_blank"
    ><img
      src="/public/img/ads-l.png"
      border="0"
      alt="cadrant publicitaire"
      class="justify-center p-8"
  /></a>
</template>

<script>
export default {
  name: "Arrivee2",
  data() {
    return {};
  },
};
</script>