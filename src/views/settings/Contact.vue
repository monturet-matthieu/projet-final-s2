<template>
  <img class="absolute w-full -z-10 -mt-6" src="/img/bg-messagerie.webp" alt="motif de fond de la page">
 <h2>Une question? Des remarques ? Contactez nous!</h2>
 <form class="flex flex-col justify-center px-5  space-y-6">
        <input type="text" name="nom" class="text-black placeholder:text-Texte bg-white border-1 border-Texte rounded-lg px-3 py-2" placeholder="[Saisissez votre nom]">
        <label for="nom">Nom : </label>
        <input type="text" name="prenom" class="text-black placeholder:text-Texte bg-white border-1 border-Texte rounded-lg px-3 py-2" placeholder="[Saisissez votre prénom]">
        <label for="prenom">Prénom : </label>

        <input type="text" name="objet" class="text-black placeholder:text-Texte bg-white border-1 border-Texte rounded-lg px-3 py-2" placeholder="[Saisissez votre type de demande]">
        <label for="objet">Type de demande : </label>

        <input type="tel" name="tel" class="text-black placeholder:text-Texte bg-white border-1 border-Texte rounded-lg px-3 py-2" placeholder="[Saisissez votre numéro de portable]">
        <label for="tel">Téléphone portable : </label>

        <input type="email" name="mail" class="text-black placeholder:text-Texte bg-white border-1 border-Texte rounded-lg px-3 py-2" placeholder="[Saisissez votre E-Mail]">
        <label for="email">E-Mail : </label>

        <input type="text" name="message" class="text-black placeholder:text-Texte bg-white border-1 border-Texte rounded-lg px-3 " aria-rowcount="200" size="200" placeholder="[Saisissez votre message]">
        <label for="message">Votre message : </label>
    </form>
    
  <!-- <div class="w-44 ml-20 mb-2 border-b-2 border-bleu30%"></div> -->
  
</template>

<script>
export default{
  name: 'Contact',
  data(){
    return{}
  },
  }

</script>