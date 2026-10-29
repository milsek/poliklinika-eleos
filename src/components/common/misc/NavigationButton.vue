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
  <RouterLink :to="to" class="group relative text-sm font-display font-semibold tracking-wide md:px-3 py-2
  transition-colors duration-200" :class="isActive ? 'text-accent-dark' : 'text-gray-700 hover:text-accent-dark'">
    {{ label }}
    <span class="hidden md:block absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-accent origin-left transition-transform duration-300"
      :class="isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"></span>
  </RouterLink>
</template>
