<template>
  <div>
    <h2 class="text-2xl font-bold mt-14 mb-2 ml-5">
      Autorisation de l'appareil
    </h2>
    <div
      class="
        bg-white
        text-Texte text-lef
        font-bold
        flex flex-col
        w-3/4
        mx-auto
        content-center
        shadow-lg
      "
    >
      <checkbox class="py-3" :nom="'Travail'"></checkbox>
      <div class="h-[1px] bg-slate-100"></div>
      <checkbox class="py-3" :nom="'Organisation'"></checkbox>
      <div class="h-[1px] bg-slate-100"></div>
      <checkbox class="py-3" :nom="'Sport'"></checkbox>
      <div class="h-[1px] bg-slate-100"></div>
      <checkbox class="py-3" :nom="'Cuisine'"></checkbox>
      <div class="h-[1px] bg-slate-100"></div>
      <checkbox class="py-3" :nom="'Entourage'"></checkbox>
      <div class="h-[1px] bg-slate-100"></div>
      <checkbox class="py-3" :nom="'Ecologique'"></checkbox>
      <div class="h-[1px] bg-slate-100"></div>
      <checkbox class="py-3" :nom="'Dépassement de soi'"></checkbox>
      <div class="h-[1px] bg-slate-100"></div>
      <checkbox class="py-3" :nom="'Bien-être'"></checkbox>
      <div class="h-[1px] bg-slate-100"></div>
      <checkbox class="py-3" :nom="'Art'"></checkbox>
      <div class="h-[1px] bg-slate-100"></div>
      <checkbox class="py-3" :nom="'Numérique'"></checkbox>
      <div class="h-[1px] bg-slate-100"></div>
      <checkbox class="py-3" :nom="'Budget'"></checkbox>
    </div>
  </div>
  <a href="https://www.google.com/intl/fr_fr/adsense/start/" target="_blank"
    ><img
      src="/public/img/ads-l.png"
      border="0"
      alt="cadrant publicitaire"
      class="justify-center p-8 mb-5"
  /></a>
</template>

<script>
import Checkbox from "../../components/checkbox.vue";
export default {
  components: { Checkbox },
};
</script> 