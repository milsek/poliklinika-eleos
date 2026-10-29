<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import NavigationButton from '@/components/common/misc/NavigationButton.vue';

const route = useRoute();
const isOpen = ref(false);
const isScrolled = ref(false);
const isMobile = ref(false);

const checkScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
};

watch(() => route.path, () => {
  isOpen.value = false;
});

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  window.addEventListener('resize', checkScreenSize);
  checkScroll();
  checkScreenSize();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/85 backdrop-blur-md border-b"
    :class="isScrolled || isOpen ? 'border-gray-200/80 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.15)]' : 'border-transparent'">
    <div class="px-4 md:px-0 mx-auto">

      <div class="flex items-center justify-between w-full px-2 md:px-10">

        <div class="flex items-center flex-shrink-0 md:py-1">
          <RouterLink to="/">
            <div class="flex items-center justify-center h-16 transition-all duration-300" :class="{'md:h-24': !isScrolled && !isMobile}">
              <img :src="isScrolled || isMobile ? '/images/logo-only.png' : '/images/logo.png'" alt="Poliklinika Eleos Logo"
                   :class="{'h-10 md:h-16': !isScrolled, 'h-10': isScrolled && isMobile, 'h-12': isScrolled && !isMobile }">
            </div>
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center md:space-x-2 lg:space-x-4">
          <NavigationButton label="POČETNA" to="/" />
          <NavigationButton label="O NAMA" to="/o-nama" />
          <NavigationButton label="PREGLEDI" to="/pregledi" />
          <NavigationButton label="CJENOVNIK" to="/cjenovnik" />
          <NavigationButton label="TIM" to="/tim" />
          <NavigationButton label="KONTAKT" to="/kontakt" />
          <a href="tel:+38766012021"
            class="hidden lg:inline-flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-semibold tracking-wide
            shadow-sm hover:bg-accent-dark transition-colors duration-200 whitespace-nowrap">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
            </svg>
            +387 66 012 021
          </a>
        </div>

        <!-- Mobile Navigation Button -->
        <div class="md:hidden flex items-center">
          <button @click="isOpen = !isOpen" aria-label="Meni" class="p-2 -mr-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none hover:cursor-pointer transition-colors">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <Transition
        enter-active-class="transition duration-300 ease-in-out"
        enter-from-class="transform -translate-y-2 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in-out"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <div v-if="isOpen" class="md:hidden border-t border-gray-200/80">
          <div class="flex flex-col px-2 pt-3 pb-5 space-y-1">
            <NavigationButton label="Početna" to="/" />
            <NavigationButton label="O nama" to="/o-nama" />
            <NavigationButton label="Pregledi" to="/pregledi" />
            <NavigationButton label="Cjenovnik" to="/cjenovnik" />
            <NavigationButton label="Tim" to="/tim" />
            <NavigationButton label="Kontakt" to="/kontakt" />
            <a href="tel:+38766012021"
              class="mt-3 inline-flex justify-center px-5 py-3 rounded-full bg-accent text-white text-sm font-semibold tracking-wide hover:bg-accent-dark transition-colors">
              Pozovite: +387 66 012 021
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>
