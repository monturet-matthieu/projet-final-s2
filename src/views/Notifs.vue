<template>
    <RouterLink class="flex justify-end mr-8 my-4" to="/">
        <img src="../../public/icon/close.svg" alt="icone de fermeture de la page notifications">
    </RouterLink>

    <a href="https://www.google.com/intl/fr_fr/adsense/start/" target="_blank">
    <img
      src="/public/img/ads-l.png"
      border="0"
      alt="cadran publicitaire"
      class="justify-center pt-4 pb-12 px-8"/>
    </a>

    <div class="bg-white drop-shadow-xl mx-4 text-xs">
        <Routerlink to="/" class="flex justify-center border-b-2">
            <img class="w-16 h-16 ml-2" src="../../public/gif/71441-new-badge.gif" alt="Gif 'nouveau'">
            <h5 class="mt-3 mx-4">Une nouvelle quête quotidienne vient d'être ajoutée dans vos éti-quêtes.</h5>
        </Routerlink>
        <RouterLink to="/" class="flex justify-center border-b-2">
            <img class="w-12 h-12 my-2 ml-4" src="../../public/icon/attention-notif.svg" alt="">
            <h5 class="mt-3 mx-4">Vos quêtes quotidiennes vont <span class="text-Secondaire font-bold">expirer dans 1h</span> ! Dépêchez-vous de les finir !</h5>
        </RouterLink>
        <RouterLink to="/messagerie" class="flex justify-center border-b-2">
            <img class="w-12 h-12 my-2 ml-4" src="../../public/icon/message-notification.svg" alt="">
            <h5 class="mt-3 mx-4">Vous avez reçu deux nouveaux messages de la part de <span class="text-Secondaire font-bold">LeFouDu25</span></h5>
        </RouterLink>
        <RouterLink to="/social" class="flex justify-center border-b-2">
            <img class="w-12 h-12 my-2 ml-4" src="../../public/icon/ajout-amie-notif.svg" alt="">
            <h5 class="mt-3 mx-4">Vous avez reçu une demande d'ami de la part de <span class="text-Secondaire font-bold">LeRobustedu81</span>.</h5>
        </RouterLink>
        <RouterLink to="/profil" class="flex justify-center border-b-2">
            <img class="w-12 h-12 my-2 ml-4" src="../../public/icon/bonhomme.svg" alt="">
            <h5 class="mt-3 mx-4">Vous venez de débloquer : <span class="text-Secondaire font-bold">Lunettes de soleil</span>.</h5>
        </RouterLink>
        <RouterLink to="/parametres/maj" class="flex justify-center border-b-2">
            <img class="w-12 h-12 my-2 ml-4" src="../../public/icon/roulette.svg" alt="">
            <h5 class="mt-2 mx-4 mb-2">Correction de bugs dans la rubrique Customisation de l'avatar. En savoir plus sur la nouvelle MAJ</h5>
        </RouterLink>
    </div>
</template>