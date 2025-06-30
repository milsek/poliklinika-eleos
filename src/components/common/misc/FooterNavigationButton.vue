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
  <a :href="to" class="text-xs font-display text-center md:text-left font-medium text-gray-400
  hover:text-gray-600 transition ease-in duration-100">
    {{ label }}
  </a>
</template>
