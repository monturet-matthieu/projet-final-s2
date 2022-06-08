<template>
  <div
    class="grid grid-cols-1 lg:text-lg xl:text-xl lg:grid-cols-2 xl:grid-cols-4"
  >
    <div>
      <h2 class="text-2xl font-bold mt-14 mb-2 ml-5">Notifications par mail</h2>
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
        <checkbox class="py-3" :nom="'Activées'"></checkbox>
        <div class="h-[1px] bg-slate-100"></div>
        <checkbox class="py-3" :nom="'Désactivées'"></checkbox>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-2 ml-5 mt-14">
        Qui peut me contacter ?
      </h2>
      <div
        class="
          bg-white
          text-Texte text-center
          font-bold
          flex flex-col
          w-3/4
          mx-auto
          content-center
          shadow-lg
        "
      >
        <checkbox class="py-3" :nom="'Tout le monde'"></checkbox>
        <div class="h-[1px] bg-slate-100"></div>
        <checkbox class="py-3" :nom="'Mes amis et leurs amis'"></checkbox>
        <div class="h-[1px] bg-slate-100"></div>
        <checkbox class="py-3" :nom="'Mes amis uniquement'"></checkbox>
        <div class="h-[1px] bg-slate-100"></div>
        <checkbox class="py-3" :nom="'Personne'"></checkbox>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-2 ml-5 mt-14">
        Qui a accès à mes informations (fiche avater) ?
      </h2>
      <div
        class="
          bg-white
          text-Texte text-center
          font-bold
          flex flex-col
          w-3/4
          mx-auto
          content-center
          shadow-lg
          mb-24
        "
      >
        <checkbox class="py-3" :nom="'Tout le monde'"></checkbox>
        <div class="h-[1px] bg-slate-100"></div>
        <checkbox class="py-3" :nom="'Mes amis et leurs amis'"></checkbox>
        <div class="h-[1px] bg-slate-100"></div>
        <checkbox class="py-3" :nom="'Mes amis uniquement'"></checkbox>
        <div class="h-[1px] bg-slate-100"></div>
        <checkbox class="py-3" :nom="'Personne'"></checkbox>
      </div>
    </div>
  </div>
</template>
<script>
import Checkbox from "../../components/checkbox.vue";
export default {
  components: { Checkbox },
};
</script>

