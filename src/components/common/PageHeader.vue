<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: 'Poliklinika Eleos',
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="mb-8 md:mb-12">
    <p class="text-xs font-semibold tracking-[0.2em] uppercase text-accent-dark">{{ eyebrow }}</p>
    <h1 class="mt-2 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{{ title }}</h1>
    <div class="mt-4 h-1 w-14 rounded-full bg-linear-to-r from-accent to-light"></div>
  </div>
</template>
