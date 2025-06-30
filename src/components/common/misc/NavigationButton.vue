<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
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

const isActive = computed(() => route.path === props.to);
</script>

<template>
  <a :href="to" class="text-sm md:w-auto lg:w-24 md:text-center font-display font-semibold text-gray-700
  hover:text-accent/70 md:px-3 py-2 transition ease-in duration-100" :class="{ 'sm:text-accent border-b border-light md:border-0': isActive }">
    {{ label }}
  </a>
</template>
