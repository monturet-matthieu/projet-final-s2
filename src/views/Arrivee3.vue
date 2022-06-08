<template>
  <div class="font-karla">
    <img class="p-4" src="/public/img/arrivee3.webp" alt="Robot explicatif" />

    <h3 class="text-2xl font-bold text-center">Complète ton profil</h3>
    <h4 class="text-xl font-bold text-Important text-center">2/3 - Complété</h4>

    <div class="font-gothic font-extrabold mt-10 ml-2">
      <h3 class="text-2xl">Répondez à notre sondage pour nous aider</h3>
      <h4 class="text-lg">Pour quelle(s) raison(s) utilisez vous UpDayMe ?</h4>
    </div>
    <div class="mt-10">
      <Checkbox nom="Me rappeler de prendre le temps pour certaines choses importantes" />
      <Checkbox nom="Sortir de la routine quotidienne" />
      <Checkbox nom="Bénéficier de conseils pertinents et adaptés pour mon cadre de vie" />
      <Checkbox nom="Je souhaite me challenger sur des choses que je ne maîtrise pas encore" />
      <Checkbox nom="Je veux me reprendre en main, prendre soin de moi" />

      
    </div>
    <div class="flex flex-row justify-center mt-6">
      <RouterLink to="./Arrivee2">
        <img
          class="w-14 mr-24"
          src="/public/icon/precedent-orange.svg"
          alt="precedent"
      /></RouterLink>
      <RouterLink to="/">
        <img class="w-14 ml-24" src="/public/icon/next.svg" alt="suivant" />
      </RouterLink>
    </div>
    <img
      class="pl-20 pr-20 mt-10 mb-10"
      src="/public/img/arrivee3-repaire.webp"
      alt="page arrive 3/3"
    />
  </div>
  <a href="https://www.google.com/intl/fr_fr/adsense/start/" target="_blank"
    ><img
      src="/public/img/ads-l.png"
      border="0"
      alt="cadran publicitaire"
      class="justify-center p-8"
  /></a>
</template>

<script>
import Checkbox from '../components/checkbox.vue';
export default {
    name: "Arrivee3",
    data() {
        return {};
    },
    components: { Checkbox }
};
</script>