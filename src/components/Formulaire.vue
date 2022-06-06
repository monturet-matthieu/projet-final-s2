<template>
  <form class="mx-auto w-3/4">
    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
        <label
          class="mb-2 block text-sm font-bold uppercase text-Texte"
          for="grid-first-name"
          >Nom</label
        >
        <input
          class="
            text-grey-600
            mb-3
            block
            w-full
            appearance-none
            rounded
            border border-bleu75%
            bg-white
            py-3
            px-4
            leading-tight
            focus:bg-bleu10% focus:outline-none
          "
          id="grid-first-name"
          type="text"
          placeholder="[Entrer votre nom ici]"
        />
      </div>
      <div class="w-full px-3 md:w-1/2">
        <label
          class="mb-2 block text-sm font-bold uppercase tracking-wide text-text"
          for="grid-last-name"
          >Prénom</label
        >
        <input
          class="
            text-grey-600
            block
            w-full
            appearance-none
            rounded
            border border-bleu75%
            bg-white
            py-3
            px-4
            leading-tight
            focus:bg-bleu10% focus:outline-none
          "
          id="grid-last-name"
          type="text"
          placeholder="[Entrer votre prénom ici]"
        />
      </div>
    </div>
    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <label
          class="
            mb-2
            block
            text-xs
            font-bold
            uppercase
            tracking-wide
            text-Texte
          "
          for="grid-password"
        >
          E-mail
        </label>
        <input
          class="
            text-grey-600
            block
            w-full
            appearance-none
            rounded
            border border-bleu75%
            bg-white
            py-3
            px-4
            leading-tight
            focus:bg-bleu10% focus:outline-none
          "
          id="email"
          type="email"
          placeholder="[Entrer votre adresse mail ici]"
        />
      </div>
    </div>

    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <label
          class="
            mb-2
            block
            text-xs
            font-bold
            uppercase
            tracking-wide
            text-Texte
          "
          for="grid-password"
        >
          Numéro de téléphone
        </label>
        <input
          class="
            text-grey-600
            block
            w-full
            appearance-none
            rounded
            border border-bleu75%
            bg-white
            py-3
            px-4
            leading-tight
            focus:bg-bleu10% focus:outline-none
          "
          id="tel"
          type="tel"
          placeholder="[Entrer votre numéro de téléphone ici]"
        />
      </div>
    </div>

    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <label
          class="
            mb-2
            block
            text-xs
            font-bold
            uppercase
            tracking-wide
            text-Texte
          "
          for="grid-password"
        >
          Type de demande
        </label>
        <input
          class="
            text-grey-600
            block
            w-full
            appearance-none
            rounded
            border border-bleu75%
            bg-white
            py-3
            px-4
            leading-tight
            focus:bg-bleu10% focus:outline-none
          "
          id="demande"
          type="demande"
          placeholder="[Entrer votre type de demande ici]"
        />
      </div>
    </div>

    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <label
          class="
            mb-2
            block
            text-xs
            font-bold
            uppercase
            tracking-wide
            text-Texte
          "
          for="grid-password"
        >
          Votre message
        </label>
        <textarea
          class="
            no-resize
            mb-3
            block
            h-48
            w-full
            resize-none
            appearance-none
            rounded
            border border-bleu75%
            bg-white
            py-3
            px-4
            leading-tight
            text-gray-700
            focus:border-gray-500 focus:bg-white focus:outline-none
          "
          id="message"
          placeholder="[Entrer votre message ici]"
        ></textarea>
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3">
        <button
          class="
            mb-20
            focus:shadow-outline
            rounded-18xl
            font-bebas-neue
            text-xl
            border-2
            bg-bleu40%
            py-1.5
            px-3
            text-white
            shadow
            hover:bg-cyan-900
            focus:outline-none
          "
          type="button"
        >
          Envoyer
        </button>
      </div>
      <div class="md:w-2/3"></div>
    </div>
  </form>
</template>