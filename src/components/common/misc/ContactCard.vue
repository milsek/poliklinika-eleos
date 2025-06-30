<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  iconAlt: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex space-x-4 items-center rounded-full h-13 w-80 bg-light border-2 border-accent px-1">
    <div class="flex flex-col justify-center bg-white rounded-full items-center h-10 w-10 border-2 border-accent select-none">
      <img :src="icon" :alt="iconAlt" class="h-5 w-5 mx-auto my-auto" />
    </div>
    <p>{{ label }}</p>
  </div>
</template>