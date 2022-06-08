<template>
    <div class="flex justify-center space-x-14 font-bebas-neue mt-5">
        <RouterLink to="/">
            <button type="submit" class="bg-Boutons text-Primaire p-2 px-4 rounded-7xl">
                {{ nom }}
            </button>
        </RouterLink>

        <RouterLink to="/">
            <button class="bg-Primaire text-Texte p-2 px-4 border-Boutons border-2 rounded-7xl font-extrabold">
                <slot />
            </button>
        </RouterLink>
    </div>
</template>

<script>
export default {
  props: {
    nom: String,
  },
};
</script>