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
      <checkbox class="py-3" :nom="'Contact'"></checkbox>
      <div class="h-[1px] bg-slate-100"></div>
      <checkbox class="py-3" :nom="'Fichiers'"></checkbox>
      <div class="h-[1px] bg-slate-100"></div>
      <checkbox class="py-3" :nom="'Appareil photo'"></checkbox>
      <div class="h-[1px] bg-slate-100"></div>
      <checkbox class="py-3" :nom="'Librairie de photos'"></checkbox>
      <div class="h-[1px] bg-slate-100"></div>
      <checkbox class="py-3" :nom="'Autres applis'"></checkbox>
      <div class="h-[1px] bg-slate-100"></div>
      <checkbox class="py-3" :nom="'Notifications'"></checkbox>
    </div>
  </div>
  <a href="https://www.google.com/intl/fr_fr/adsense/start/" target="_blank"
    ><img
      src="../../../public/img/ads-l.png"
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