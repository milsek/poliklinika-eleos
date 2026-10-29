<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <RouterLink :to="to" class="text-sm font-display text-center md:text-left text-gray-500
  hover:text-accent-dark transition-colors duration-200">
    {{ label }}
  </RouterLink>
</template>
