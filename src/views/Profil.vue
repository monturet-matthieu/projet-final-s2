<template>
  <h1 class="font-gothic font-bold text-2xl ml-5">Profil</h1>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div>
      <figure class="mx-auto w-2/6">
        <img class="w-full" src="/public/img/Message_avatar.png" alt="" />
        <figcaption
          class="
            text-center
            mx-auto
            font-gothic font-bold
            text-Secondaire text-2xl
          "
        >
          LeFouDu25
        </figcaption>
      </figure>
      <img
        class="mx-auto mt-5 w-3/4"
        src="/public/img/barre-profil.png"
        alt="barre de progression du joueur"
      />
      <img
        class="w-2/3 mx-auto mt-5"
        src="/public/img/upgrade.png"
        alt="bouton go premium"
      />
    </div>
    <div class="ml-6 mt-5">
      <div class="flex flex-row gap-x-10 content-center">
        <h3 class="text-xl font-extrabold text-Texte">Fortune</h3>
        <span class="text-Secondaire font-bold text-xl">13 052</span>
        <img src="/public/icon/ruby.svg" alt="" />
      </div>
      <div class="flex flex-row gap-x-10 content-center">
        <h3 class="text-xl font-extrabold text-Texte">
          Éti’quêtes abandonnées
        </h3>
        <span class="text-Secondaire font-bold text-xl">17</span>
      </div>
      <div class="flex flex-row gap-x-10 content-center">
        <h3 class="text-xl font-extrabold text-Texte">Éti’quêtes créées</h3>
        <span class="text-Secondaire font-bold text-xl">31</span>
      </div>
      <div class="flex flex-row gap-x-10 content-center">
        <h3 class="text-xl font-extrabold text-Texte">Défis réalisés</h3>
        <span class="text-Secondaire font-bold text-xl">73/153</span>
      </div>
    </div>
  </div>

  <h2 class="mt-10 font-gothic font-bold text-2xl ml-5 mb-5">Statistiques</h2>
  <div class="text-base font-gothic grid grid-cols-3 gap-x-2 gap-y-4">
    <div class="content-center">
      <h4 class="text-center font-gothic font-semibold">Sport</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/sport.webp"
        alt="catégorie sport"
      />
      <p class="text-center font-karla font-semibold">17/20</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Bien-être</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/bien-etre.webp"
        alt="catégorie bien-être"
      />
      <p class="text-center font-karla font-semibold">16/20</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Hygiène de vie</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/hygiene.webp"
        alt="catégorie hygiène de vie"
      />
      <p class="text-center font-karla font-semibold">13/20</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Ecologie</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/bien-etre.webp"
        alt="catégorie ecologie"
      />
      <p class="text-center font-karla font-semibold">8/15</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Entourage</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/entourage.webp"
        alt="catégorie entourage"
      />
      <p class="text-center font-karla font-semibold">7/15</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Travail</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/travail.webp"
        alt="catégorie travail"
      />
      <p class="text-center font-karla font-semibold">6/15</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Alimentaion</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/alimentation.webp"
        alt="catégorie alimentation"
      />
      <p class="text-center font-karla font-semibold">4/15</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Organisation</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/organisation.webp"
        alt="catégorie organisation"
      />
      <p class="text-center font-karla font-semibold">2/15</p>
    </div>
    <div class="center">
      <h4 class="text-center font-gothic font-semibold">Art</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/art.webp"
        alt="catégorie art"
      />
      <p class="text-center font-karla font-semibold">2/15</p>
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Dépass. de soi</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/depassement-de-soi.webp"
        alt="catégorie organisation"
      />
      <img class="w-8 mx-auto" src="/public/icon/bloque.svg" alt="cadenas" />
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Economique</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/economique.webp"
        alt="catégorie economique"
      />
      <img class="w-8 mx-auto" src="/public/icon/bloque.svg" alt="" />
    </div>
    <div>
      <h4 class="text-center font-gothic font-semibold">Numérique</h4>
      <img
        class="w-3/4 mx-auto"
        src="/public/img/numerique.webp"
        alt="catégorie numérique"
      />
      <img
        class="w-8 mx-auto"
        src="/public/icon/bloque.svg"
        alt="icone indiquant que le contenu est bloqué"
      />
    </div>
  </div>

  <a href="https://www.google.com/intl/fr_fr/adsense/start/" target="_blank"
    ><img
      src="/public/img/ads-l.png"
      border="0"
      alt="cadrant publicitaire"
      class="justify-center p-8 mb-20"
  /></a>
</template>
<script>
export default {
  name: "Profil",
  data() {
    return {};
  },
};
</script>