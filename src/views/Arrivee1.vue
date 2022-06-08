<template>
  <div class="font-karla">
    <img class="p-4" src="/public/img/arrivee1.webp" alt="Robot explicatif" />

    <h3 class="text-2xl font-bold text-center">Complete ton profil</h3>
    <h4 class="text-xl font-bold text-Important text-center">0/3 - Complété</h4>

    <h2 class="font-extrabold text-3xl font-gothic mt-10 mb-1 ml-8">
      CATEGORIES
    </h2>
    <div class="flex flex-wrap">
      <img
        class="w-1/2"
        src="/public/img/hygiene-inscription.webp"
        alt="catégorie hygiene"
      />
      <img
        class="w-1/2"
        src="/public/img/bienetre-inscription.webp"
        alt="catégorie bienetre"
      />
      <img
        class="w-1/2"
        src="/public/img/travail-inscription.webp"
        alt="catégorie travail"
      />
      <img
        class="w-1/2"
        src="/public/img/sport-inscription.webp"
        alt="catégorie sport"
      />
      <img
        class="w-1/2"
        src="/public/img/art-inscription.webp"
        alt="catégorie art"
      />
      <img
        class="w-1/2"
        src="/public/img/cuisine-inscription.webp"
        alt="catégorie cuisine"
      />
      <img
        class="w-1/2"
        src="/public/img/organisation-inscription.webp"
        alt="catégorie organisation"
      />
      <img
        class="w-1/2"
        src="/public/img/entourage-inscription.webp"
        alt="catégorie entourage"
      />
      <img
        class="w-1/2"
        src="/public/img/ecologique-inscription.webp"
        alt="catégorie devperso"
      />
      <img
        class="w-1/2"
        src="/public/img/devperso-inscription.webp"
        alt="catégorie devperso"
      />
      <img
        class="w-1/2"
        src="/public/img/economique-inscription.webp"
        alt="catégorie economique"
      />
      <img
        class="w-1/2"
        src="/public/img/numerique-inscription.webp"
        alt="catégorie numerique"
      />
    </div>
    <div class="flex flex-row justify-end mt-6 mr-9">
      <RouterLink to="Arrivee2">
        <img class="w-14 ml-24" src="/public/icon/next.svg" alt="suivant" />
      </RouterLink>
    </div>
    <img
      class="pl-20 pr-20 mt-10 mb-10"
      src="/public/img/arrivee1-repaire.webp"
      alt="page arrive 1/3"
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
  name: "Arrivee1",
  data() {
    return {};
  },
};
</script>