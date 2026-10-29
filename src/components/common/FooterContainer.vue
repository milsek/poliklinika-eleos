<script setup>
import { onMounted, ref } from 'vue';
import FooterNavigationButton from '@/components/common/misc/FooterNavigationButton.vue';

const email = ref(null);

onMounted(() => {
  const user = "poliklinika.eleos";
  const domain = "gmail.com";
  if (email.value) {
    email.value.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
  }
});
</script>

<template>
  <footer class="w-full bg-cream border-t border-accent/20 pt-14 pb-6">
    <div class="max-w-[1200px] mx-auto px-6 py-3">
      <div class="flex flex-col md:flex-row md:justify-between gap-10 md:gap-6">

        <!-- Logo (smaller, left) -->
        <div class="flex flex-col justify-center md:justify-start flex-shrink-0">
          <RouterLink to="/" class="mx-auto md:mx-0">
            <img src="/images/logo.png" alt="Poliklinika Eleos Logo" class="w-48 md:w-28 lg:w-36" />
          </RouterLink>
          <div class="flex justify-center md:justify-start space-x-2 mt-6 md:mt-4">
            <a href="https://www.instagram.com/poliklinika.eleos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            class="w-9 h-9 bg-white border border-gray-200 hover:border-accent hover:bg-light/30
              rounded-full flex items-center justify-center transition-colors duration-200">
              <img src="/icons/instagram-slim.png" alt="Instagram" class="w-6 h-6 select-none">
            </a>
            <a href="https://www.facebook.com/profile.php?id=61575910735290" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            class="w-9 h-9 bg-white border border-gray-200 hover:border-accent hover:bg-light/30
              rounded-full flex items-center justify-center transition-colors duration-200">
              <img src="/icons/facebook-slim.png" alt="Facebook" class="w-6 h-6 select-none">
            </a>
          </div>
        </div>

        <!-- Kontakt -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left text-sm">
          <p class="text-xs font-semibold tracking-[0.15em] uppercase text-accent-dark mb-3">Kontakt</p>
          <div class="text-gray-500 space-y-1.5">
            <p>Branislava Nušića 9, Brčko</p>
            <p><a href="tel:+38766012021" class="hover:text-accent-dark transition-colors">+387 66 012 021</a></p>
            <p><a href="tel:+38765906938" class="hover:text-accent-dark transition-colors">+387 65 906 938</a></p>
            <p class="hover:text-accent-dark transition-colors"><span ref="email"></span></p>
          </div>
        </div>

        <!-- Radno vrijeme -->
        <div class="flex flex-col items-center md:items-start text-sm">
          <p class="text-xs font-semibold tracking-[0.15em] uppercase text-accent-dark mb-3">Radno vrijeme</p>
          <div class="text-gray-500 space-y-1.5 w-56">
            <div class="flex justify-between gap-4"><span>Pon - Pet</span><span class="text-gray-700 font-medium">8:00 - 20:00</span></div>
            <div class="flex justify-between gap-4"><span>Subota</span><span class="text-gray-700 font-medium">9:00 - 15:00</span></div>
            <div class="flex justify-between gap-4"><span>Nedjelja</span><span>Neradna</span></div>
          </div>
        </div>

        <!-- Navigacija (right) -->
        <div class="flex flex-col items-center md:items-start">
          <p class="text-xs font-semibold tracking-[0.15em] uppercase text-accent-dark mb-3">Sadržaj</p>
          <div class="flex flex-col space-y-1.5">
            <FooterNavigationButton label="Početna" to="/" />
            <FooterNavigationButton label="O nama" to="/o-nama" />
            <FooterNavigationButton label="Pregledi" to="/pregledi" />
            <FooterNavigationButton label="Cjenovnik" to="/cjenovnik" />
            <FooterNavigationButton label="Tim" to="/tim" />
            <FooterNavigationButton label="Kontakt" to="/kontakt" />
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center mt-12 pt-5 border-t
      border-accent/20 text-[12px] text-gray-400 tracking-wider">
        <div>Poliklinika Eleos</div>
        <a
          href="https://milsek.dev"
          target="_blank"
          rel="noopener"
          class="group order-last md:order-none inline-flex w-fit items-center space-x-1.5 mt-3 md:mt-0 text-[12px] text-gray-400 hover:text-gray-700 transition-colors"
        >
          <img src="/milsek.svg" alt="milsek logo" class="h-5 w-5 transition-transform group-hover:-rotate-6 mt-0.5">
          <span>Sajt napravio <span class="font-semibold text-gray-600 group-hover:text-gray-900 tracking-wide transition-colors">milsek</span></span>
        </a>
        <div class="mt-1 md:mt-0">
          Copyright © {{ (new Date()).getUTCFullYear() }} - All rights reserved
        </div>
      </div>
    </div>
  </footer>
</template>
