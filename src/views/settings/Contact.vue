<template>
  <img
    class="absolute w-full -z-10 -mt-6"
    src="/img/bg-messagerie.webp"
    alt="motif de fond de la page"
  />
  <h2 class="font-bold text-xl ml-5 mb-5">
    Une question? Des remarques ? Contactez nous!
  </h2>
  <Formulaire />
  <!-- <form class="flex flex-col justify-center px-5 space-y-6">
    <input
      type="text"
      name="nom"
      class="
        text-black
        placeholder:text-Texte
        bg-white
        border-1 border-Texte
        rounded-lg
        px-3
        py-2
      "
      placeholder="[Saisissez votre nom]"
    />
    <label for="nom">Nom : </label>
    <input
      type="text"
      name="prenom"
      class="
        text-black
        placeholder:text-Texte
        bg-white
        border-1 border-Texte
        rounded-lg
        px-3
        py-2
      "
      placeholder="[Saisissez votre prénom]"
    />
    <label for="prenom">Prénom : </label>

    <input
      type="text"
      name="objet"
      class="
        text-black
        placeholder:text-Texte
        bg-white
        border-1 border-Texte
        rounded-lg
        px-3
        py-2
      "
      placeholder="[Saisissez votre type de demande]"
    />
    <label for="objet">Type de demande : </label>

    <input
      type="tel"
      name="tel"
      class="
        text-black
        placeholder:text-Texte
        bg-white
        border-1 border-Texte
        rounded-lg
        px-3
        py-2
      "
      placeholder="[Saisissez votre numéro de portable]"
    />
    <label for="tel">Téléphone portable : </label>

    <input
      type="email"
      name="mail"
      class="
        text-black
        placeholder:text-Texte
        bg-white
        border-1 border-Texte
        rounded-lg
        px-3
        py-2
      "
      placeholder="[Saisissez votre E-Mail]"
    />
    <label for="email">E-Mail : </label>

    <input
      type="text"
      name="message"
      class="
        text-black
        placeholder:text-Texte
        bg-white
        border-1 border-Texte
        rounded-lg
        px-3
      "
      aria-rowcount="200"
      size="200"
      placeholder="[Saisissez votre message]"
    />
    <label for="message">Votre message : </label>
  </form> -->

  <!-- <div class="w-44 ml-20 mb-2 border-b-2 border-bleu30%"></div> -->
  <div class="bg-Secondaire text-Primaire py-2">
    <h2 class="text-2xl font-bold mt-14 mb-2 ml-5">Membres de l'équipe</h2>
    <p class="text-xl font-normal mt-5 mb-2 ml-5 align-item-center lg:w-2/3">
      Étudiants en première année du BUT MMi à Montbéliard, nous avons réalisé
      cette app dans le cadre d’un exercice pédagogique.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 mx-auto">
      <div class="w-1/3 mx-auto">
        <h3 class="text-center text-xl font-medium mt-14 mb-1">Alicia</h3>
        <img class="w-full" src="/public/img/alicia.webp" alt="alicia" />
        <h4 class="text-center mt-1">Communication</h4>
      </div>

      <p class="text-lg lg:text-xl mx-auto my-auto w-3/4 mt-5 mb-15">
        Attentive et ordonnée, Alicia s’est consacrée à l’environnement
        marketing et aux techniques de communication à mettre en oeuvre lors de
        ce projet. Elle a pris le temps de définir le contexte pour pouvoir
        suivre les étapes : questionnaire, ciblage, maquettage, intégration.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 mx-auto">
      <div class="w-1/3 mx-auto">
        <h3 class="text-center text-xl font-medium mb-1 mt-14">Lucas</h3>
        <img class="w-full" src="/public/img/lucas.webp" alt="lucas" />
        <h4 class="text-center mt-1">Design</h4>
      </div>

      <p class="text-lg lg:text-xl mx-auto my-auto w-3/4 mt-5 mb-15">
        Inventif et conscienceux, Lucas s’est attaché au design du site. En tant
        que directeur artistique du projet, il a définis une harmonie colorée
        cohérente avec les prérequis marketing (travaillés par Alicia) et tous
        les composents (éléments de décors, boutons, backgrounds, ou encore
        illustrations) apparaissant sur le site promotionnel et final. Il a
        décidé d’utiliser 3 typographies différentes : une pour les boutons
        d’intéraction, une pour les titres et une pour les paragraphes. Il s’est
        également assuré que les contenus textuels s’adaptent avec l’interface
        du site.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 mx-auto">
      <div class="w-1/3 mx-auto">
        <h3 class="text-center text-xl font-medium mb-1 mt-14">Matthieu</h3>
        <img class="w-full" src="/public/img/matthieu.webp" alt="lucas" />
        <h4 class="text-center mt-1">Programmation</h4>
      </div>

      <p class="text-lg lg:text-xl mx-auto my-auto w-3/4 mt-5 mb-24">
        Curieux et instinctif, Matthieu s’est chargé de développer le site web.
        Il a trié les contenus de maquettage (images et composants), installé
        les polices nécessaires et a codé l’interface que vous voyez, en HTML,
        CSS et JS.
      </p>
    </div>

    <div class="pb-5">
      <button
        class="
          bg-Primaire
          flex flex-wrap
          font-bebas-neue
          text-2xl
          mx-auto
          text-Texte
          p-5
        "
      >
        Envoyer un mail
        <img class="w-8 ml-1" src="/public/icon/send.svg" alt="" />
      </button>
    </div>
  </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <img
      class="justify-center mx-auto"
      src="/public/img/femme-assise.webp"
      alt=""
    />
    <div class="mx-auto text-center my-auto">
      <h2 class="text-xl font-bold mt-14 mb-2 mx-auto ml-5 my-auto">
        Suivez-nous sur les réseaux
      </h2>
      <div class="mx-auto gap-2 flex flex-row justify-center">
        <a
          href="https://www.snapchat.com/add/updayme?share_id=W-vYSVFd0uw&locale=fr-FR"
          ><img
            class="mx-auto"
            src="/public/icon/snapchat-bleu.svg"
            alt="snapchat"
        /></a>
        <a href="https://twitter.com/UpdayMe"
          ><img
            class="mx-auto"
            src="/public/icon/twitter-bleu.svg"
            alt="twitter"
        /></a>
        <a href="https://www.instagram.com/updayme/"
          ><img
            class="mx-auto"
            src="/public/icon/instagram-bleu.svg"
            alt="instagram"
        /></a>
      </div>
    </div>
    <div>
      <h2
        class="
          text-xl
          lg:text-2xl
          font-bold
          mt-14
          mb-2
          mx-auto
          ml-5
          my-auto
          text-center
        "
      >
        Nous soutenir
      </h2>
      <img
        class="mx-auto my-auto mb-5"
        src="/public/img/paypal-bleu.webp"
        alt=""
      />
    </div>
    <img
      class="my-auto w-3/4 mx-auto"
      src="/public/img/bouton-patreon.webp"
      alt=""
    />
  </div>

  <footer class="mt-5 mb-16">
    <Footer />
  </footer>
</template>

<script>
import Formulaire from "/src/components/Formulaire.vue";
import Footer from "/src/components/layout/Footer.vue";
export default {
  name: "Contact",
  components: { Formulaire, Footer },
};
</script>