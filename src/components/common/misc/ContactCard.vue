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
  href: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <component :is="href ? 'a' : 'div'" :href="href"
    class="group flex space-x-4 items-center rounded-full h-13 w-80 bg-cream border border-accent/40 px-1.5
    transition-all duration-200"
    :class="{ 'hover:border-accent hover:bg-light/20 hover:shadow-sm': href }">
    <div class="flex flex-col justify-center bg-white rounded-full items-center h-10 w-10 border border-accent/60 shadow-xs select-none">
      <img :src="icon" :alt="iconAlt" class="h-5 w-5 mx-auto my-auto" />
    </div>
    <p class="text-gray-800 group-hover:text-gray-950">{{ label }}</p>
  </component>
</template>
