<template>
  <div class="flex justify-start">
    <div class="my-4 ml-4">
      <input
        class="
          appearance-none
          h-8
          w-8
          border border-Boutons
          rounded-10xl
          bg-Primaire
          checked:bg-Boutons
          focus:outline-none
          transition
          duration-200
          mr-8
          cursor-pointer
        "
        type="checkbox"
      />
      <label class="text-Texte">
        {{ nom }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nom: String,
  },
};
</script>