<script setup>
import { useHead } from '@unhead/vue';
import { RouterView } from 'vue-router';
import NavigationBar from '@/components/common/NavigationBar.vue';
import FooterContainer from '@/components/common/FooterContainer.vue';

useHead({
  htmlAttrs: {
    lang: 'sr',
  },
});
</script>

<template>
  <NavigationBar />
  <RouterView class="font-display" />
  <FooterContainer />
</template>
