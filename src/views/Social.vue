<script setup>
import Stats from "../components/Stats.vue";
import Footer from "../components/layout/Footer.vue";
</script>

<template>
  <img
    class="absolute -z-10"
    src="../../public/img/bg-social.webp"
    alt="motif de fond de la page"
  />
  <div
    class="
      flex
      my-4
      mt-12
      justify-center
      gap-8
      bg-Boutons
      p-2
      max-w-xl
      mx-auto
      rounded-14xl
    "
  >
    <a class="bg-Primaire p-3 px-6 rounded-6xl" href="social">Stats</a>
    <a class="p-3 rounded-6xl" href="./Chat">Messagerie</a>
  </div>

  <a href="" class="flex pt-4 pb-2">
    <img
      class="w-12 h-12 ml-8"
      src="../../public/img/avatar-bleu.webp"
      alt="icône de trophée"
    />
    <span class="text-base ml-3">MichelLeRobuste</span>
    <span class="mt-6 -ml-28 mr-2 text-xs">A accompli 2 défis aujourd’hui</span>
    <img
      class="w-7 h-7 mt-2 mx-2"
      src="../../public/icon/trophee.svg"
      alt="icône de trophée"
    />
  </a>
  <Stats />
  <div class="w-44 ml-20 mb-2 border-b-2 border-bleu30%"></div>

  <div class="flex pt-4 pb-2">
    <img
      class="w-12 h-12 ml-8"
      src="../../public/img/avatar-vert.webp"
      alt="icône de trophée"
    />
    <span class="text-base ml-3">MichelLeRobuste</span>
    <span class="mt-6 -ml-28 mr-2 text-xs">A accompli 0 défis aujourd’hui</span>
    <img
      class="w-7 h-7 mt-2 mx-2"
      src="../../public/icon/trophee.svg"
      alt="icône de trophée"
    />
  </div>
  <div class="w-44 ml-20 mb-2 border-b-2 border-bleu30%"></div>

  <div class="flex pt-4 pb-2">
    <img
      class="w-12 h-12 ml-8"
      src="../../public/img/avatar-rouge.webp"
      alt="icône de trophée"
    />
    <span class="text-base ml-3">MichelLeRobuste</span>
    <span class="mt-6 -ml-28 mr-2 text-xs">A accompli 1 défis aujourd’hui</span>
    <img
      class="w-7 h-7 mt-2 mx-2"
      src="../../public/icon/trophee.svg"
      alt="icône de trophée"
    />
  </div>
  <div class="w-44 ml-20 mb-2 border-b-2 border-bleu30%"></div>

  <div class="flex pt-4 pb-2">
    <img
      class="w-12 h-12 ml-8"
      src="../../public/img/avatar-bleu.webp"
      alt="icône de trophée"
    />
    <span class="text-base ml-3">MichelLeRobuste</span>
    <span class="mt-6 -ml-28 mr-2 text-xs">A accompli 4 défis aujourd’hui</span>
    <img
      class="w-7 h-7 mt-2 mx-2"
      src="../../public/icon/trophee.svg"
      alt="icône de trophée"
    />
  </div>
  <div class="w-44 ml-20 mb-2 border-b-2 border-bleu30%"></div>

  <div class="flex pt-4 pb-2">
    <img
      class="w-12 h-12 ml-8"
      src="../../public/img/avatar-vert.webp"
      alt="icône de trophée"
    />
    <span class="text-base ml-3">MichelLeRobuste</span>
    <span class="mt-6 -ml-28 mr-2 text-xs">A accompli 3 défis aujourd’hui</span>
    <img
      class="w-7 h-7 mt-2 mx-2"
      src="../../public/icon/trophee.svg"
      alt="icône de trophée"
    />
  </div>
  <div class="w-44 ml-20 mb-2 border-b-2 border-bleu30%"></div>

  <div class="flex pt-4 pb-2">
    <img
      class="w-12 h-12 ml-8"
      src="../../public/img/avatar-rouge.webp"
      alt="icône de trophée"
    />
    <span class="text-base ml-3">MichelLeRobuste</span>
    <span class="mt-6 -ml-28 mr-2 text-xs">A accompli 0 défis aujourd’hui</span>
    <img
      class="w-7 h-7 mt-2 mx-2"
      src="../../public/icon/trophee.svg"
      alt="icône de trophée"
    />
  </div>
  <div class="w-44 ml-20 mb-2 border-b-2 border-bleu30%"></div>

  <div class="flex justify-end">
    <img
      class="w-60"
      src="../../public/img/img-social.webp"
      alt="illustration"
    />
  </div>

  <Footer class="mb-16" />
</template>

<script>
</script>