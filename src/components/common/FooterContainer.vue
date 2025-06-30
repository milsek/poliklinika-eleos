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
  <footer class="bg-white w-full pt-14 pb-6">
    <div class="max-w-[1200px] mx-auto px-6 py-3">
      <div class="flex flex-col md:flex-row md:justify-between gap-4">

        <!-- Logo (smaller, left) -->
        <div class="flex flex-col justify-center md:justify-start flex-shrink-0">
          <RouterLink to="/" class="mx-auto md:mx-0">
            <img src="/images/logo.png" alt="Poliklinika Eleos Logo" class="w-48 md:w-28 lg:w-36" />
          </RouterLink>
          <div class="flex justify-center md:justify-start space-x-2 mt-6 md:mt-4">
            <a href="https://www.instagram.com/poliklinika.eleos/" target="_blank" rel="noopener noreferrer"
            class="text-accent font-medium w-9 h-9 bg-light md:bg-white md:hover:bg-light md:border md:border-gray-300 hover:border-black/70
              rounded-full flex items-center justify-center transition ease-in-out duration-100">
              <img src="/icons/instagram-slim.png" alt="Instagram" class="w-6 h-6 select-none">
            </a>
            <a href="https://www.facebook.com/profile.php?id=61575910735290" target="_blank" rel="noopener noreferrer"
            class="text-accent font-medium w-9 h-9 bg-light md:bg-white md:hover:bg-light md:border md:border-gray-300 hover:border-black/70
              rounded-full flex items-center justify-center transition ease-in-out duration-100">
              <img src="/icons/facebook-slim.png" alt="Facebook" class="w-w-6 h-6 select-none">
            </a>
          </div>
        </div>

        <!-- Kontakt + Mreže (center) -->
        <div class="flex flex-col items-center md:items-start text-center text-xs">
          <p class="text-sm font-medium tracking-wide md:text-left mb-2">Kontakt</p>
          <div class="text-gray-400 space-y-1 tracking-wide">
            <div class="text-center md:text-left">
              <span>Branislava Nušića 9, Brčko</span>
            </div>
            <div class="text-center md:text-left">
              <span>+387 65 906-938</span>
            </div>
            <div class="text-center md:text-left hover:text-gray-600">
              <span ref="email"></span>
            </div>
          </div>
        </div>

        <!-- Navigacija (right) -->
        <div class="flex flex-col items-center md:items-start">
          <p class="text-sm font-medium tracking-wide md:text-left mb-2">Sadržaj</p>
          <div class="flex flex-col space-y-1">
            <FooterNavigationButton label="Početna" to="/" />
            <FooterNavigationButton label="O nama" to="/o-nama" />
            <FooterNavigationButton label="Pregledi" to="/pregledi" />
            <FooterNavigationButton label="Cjenovnik" to="/cjenovnik" />
            <FooterNavigationButton label="Tim" to="/tim" />
            <FooterNavigationButton label="Kontakt" to="/kontakt" />
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center mt-2 pt-2 border-t
      border-gray-200 text-[12px] text-gray-400 tracking-wider">
        <div>Poliklinika Eleos</div>
        <div class="mt-1 md:mt-0">
          Copyright © {{ (new Date()).getUTCFullYear() }} - All rights reserved
        </div>
      </div>
    </div>
  </footer>
</template>