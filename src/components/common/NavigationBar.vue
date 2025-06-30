<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import NavigationButton from '@/components/common/misc/NavigationButton.vue';

const isOpen = ref(false);
const isScrolled = ref(false);
const isMobile = ref(false);

const checkScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
};

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
  <nav class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <div class="px-4 md:px-0 mx-auto">

      <div class="flex items-center justify-between w-full px-2 md:px-10">

        <div class="flex items-center flex-shrink-0 md:py-1">
          <RouterLink to="/">
            <div class="flex items-center justify-center h-16" :class="{'md:h-24': !isScrolled && !isMobile}">
              <img :src="isScrolled || isMobile ? '/images/logo-only.png' : '/images/logo.png'" alt="Poliklinika Eleos Logo"
                   :class="{'h-10 md:h-16': !isScrolled, 'h-10': isScrolled && isMobile, 'h-12': isScrolled && !isMobile }">
            </div>
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center md:space-x-4 lg:space-x-6">
          <NavigationButton label="POČETNA" to="/" />
          <NavigationButton label="O NAMA" to="/o-nama" />
          <NavigationButton label="PREGLEDI" to="/pregledi" />
          <NavigationButton label="CJENOVNIK" to="/cjenovnik" />
          <NavigationButton label="TIM" to="/tim" />
          <NavigationButton label="KONTAKT" to="/kontakt" />
        </div>

        <!-- Mobile Navigation Button -->
        <div class="md:hidden flex items-center">
          <button @click="isOpen = !isOpen" class="text-gray-500 hover:text-gray-700 focus:outline-none hover:cursor-pointer">
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
        leave-active-class="transition duration-300 ease-in-out"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <div v-if="isOpen" class="md:hidden border-t border-gray-200 mt-4">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <NavigationButton label="Početna" to="/" class="block" />
            <NavigationButton label="O nama" to="/o-nama" class="block" />
            <NavigationButton label="Pregledi" to="/pregledi" class="block" />
            <NavigationButton label="Cjenovnik" to="/cjenovnik" class="block" />
            <NavigationButton label="Tim" to="/tim" class="block" />
            <NavigationButton label="Kontakt" to="/kontakt" class="block" />
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>
