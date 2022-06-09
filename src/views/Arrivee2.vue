<template>
  <div class="font-karla">
    <img class="p-4" src="/public/img/arrivee2.webp" alt="Robot explicatif" />

    <h3 class="text-2xl font-bold text-center">Complete ton profil</h3>
    <h4 class="text-xl font-bold text-Important text-center">1/3 - Complété</h4>

    <h2 class="font-extrabold text-3xl font-gothic mt-10 mb-1 ml-8">
      Complète ton profil
    </h2>
    <h3>Avatar</h3>
    
  <div class="font-karla p-5 space-y-10">
    <div class="grid-cols-3 md:px-10  grid text-center  px-3   w-full justify-center">
      <h4>Femme</h4>
      <h4>Jeune</h4>
      <h4>Homme</h4>
    </div>
    
    <h4 class="grid-cols-0">Peau claire - cheveux blonds</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
      <img src="/public/img/avatars/f-peau1-cheveux1.png" alt="">
      <img src="/public/img/avatars/nb-peau1-cheveux1.png" alt="">
      <img src="/public/img/avatars/h-peau1-cheveux1.png" alt="">
    
    </div>
    
    <h4>Peau claire - cheveux chatains</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
       <img src="/public/img/avatars/f-peau1-cheveux2.png" alt="">
    <img src="/public/img/avatars/nb-peau1-cheveux2.png" alt="">
    <img src="/public/img/avatars/h-peau1-cheveux2.png" alt="">
    </div>
   
    
    <h4>Peau claire - cheveux bruns</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
      <img src="/public/img/avatars/f-peau1-cheveux3.png" alt="">
    <img src="/public/img/avatars/nb-peau1-cheveux3.png" alt="">
    <img src="/public/img/avatars/h-peau1-cheveux3.png" alt="">
    </div>
    
    
    <h4>Peau mate - cheveux blond</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
      <img src="/public/img/avatars/f-peau2-cheveux1.png" alt="">
    <img src="/public/img/avatars/nb-peau2-cheveux1.png" alt="">
    <img src="/public/img/avatars/h-peau2-cheveux1.png" alt="">
    </div>
    
    
    <h4>Peau mate - cheveux chatains</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
      <img src="/public/img/avatars/f-peau2-cheveux2.png" alt="">
    <img src="/public/img/avatars/nb-peau2-cheveux2.png" alt="">
    <img src="/public/img/avatars/h-peau2-cheveux2.png" alt="">
    </div>
    
   
    <h4>Peau mate - cheveux bruns</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
      <img src="/public/img/avatars/f-peau2-cheveux3.png" alt="">
    <img src="/public/img/avatars/nb-peau2-cheveux3.png" alt="">
    <img src="/public/img/avatars/h-peau2-cheveux3.png" alt="">
    </div>
    
   
    <h4>Peau foncée - cheveux blonds</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
       <img src="/public/img/avatars/f-peau3-cheveux1.png" alt="">
    <img src="/public/img/avatars/nb-peau3-cheveux1.png" alt="">
    <img src="/public/img/avatars/h-peau3-cheveux1.png" alt="">
    </div>
   
    
    <h4>Peau foncée - cheveux chatains</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
        <img src="/public/img/avatars/f-peau3-cheveux2.png" alt="">
    <img src="/public/img/avatars/nb-peau3-cheveux2.png" alt="">
    <img src="/public/img/avatars/h-peau3-cheveux2.png" alt="">
    </div>
  
    
    <h4>Peau foncée - cheveux bruns</h4>
    <div class="grid-cols-3 md:px-10 px-3 grid     w-full justify-center">
      <img src="/public/img/avatars/f-peau3-cheveux3.png" alt="">
    <img src="/public/img/avatars/nb-peau3-cheveux3.png" alt="">
    <img src="/public/img/avatars/h-peau3-cheveux3.png" alt="">
    </div>
    
    

  </div>
    <h4>Couleur de peau</h4>
    <h4>Cheveux</h4>
    <div class="flex flex-row justify-center mt-6">
      <RouterLink to="Arrivee1">
        <img
          class="w-14 mr-24"
          src="/public/icon/precedent-orange.svg"
          alt="precedent"
      /></RouterLink>
      <RouterLink to="Arrivee3">
        <img class="w-14 ml-24" src="/public/icon/next.svg" alt="suivant" />
      </RouterLink>
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