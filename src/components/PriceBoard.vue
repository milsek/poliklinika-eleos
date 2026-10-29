<script setup>
defineProps({
  services: {
    type: Array,
    required: true
  },
});
</script>

<template>
  <div v-for="category in services" :key="category.categoryName"
    class="overflow-hidden rounded-2xl md:rounded-3xl border border-gray-200 bg-white shadow-sm">
    <div class="flex items-center gap-3 px-6 py-5 bg-linear-to-r from-cream to-white border-b border-accent/20">
      <span class="h-6 w-1.5 rounded-full bg-accent"></span>
      <h2 class="text-lg md:text-xl font-semibold text-gray-900">{{ category.categoryName }}</h2>
    </div>

    <div class="px-6 py-3">
      <div v-for="exam in category.examinations" :key="exam.name"
            class="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3 py-3 border-b border-gray-100 last:border-0">
        <span class="text-gray-800">{{ exam.name }}</span>
        <span class="hidden md:block flex-1 border-b-2 border-dotted border-gray-200 translate-y-[-4px]"></span>
        <span class="text-accent-dark font-bold shrink-0 whitespace-nowrap">
          {{ typeof exam.price === 'number' ? `${exam.price} KM` : exam.price }}
        </span>
      </div>
    </div>
  </div>
</template>
