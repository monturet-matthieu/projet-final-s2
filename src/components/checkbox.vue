<template>
  <div class="flex justify-center my-auto">
    <div>
      <div class="form-check">
        <input
          class="
            form-check-input
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
            bg-no-repeat bg-center bg-contain
            mr-2
            cursor-pointer
          "
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label text-Texte" for="flexCheckDefault">
          {{ nom }}
        </label>
      </div>
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