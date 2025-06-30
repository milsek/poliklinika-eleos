<script setup>
defineProps({
  services: {
    type: Array,
    required: true
  },
});
</script>

<template>
  <div v-for="category in services" :key="category.categoryName" class="border border-gray-700 shadow-sm p-6 bg-white">
    <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-900">{{ category.categoryName }}</h2>
    
    <div class="space-y-4">
      <div v-for="exam in category.examinations" :key="exam.name" 
            class="flex flex-col md:flex-row justify-between py-2 border-b border-dashed last:border-0">
        <span class="text-gray-800">{{ exam.name }}</span>
        <span class="text-accent font-bold shrink-0 mt-auto">
          {{ `${exam.price} KM` }}
        </span>
      </div>
    </div>
  </div>
</template>
