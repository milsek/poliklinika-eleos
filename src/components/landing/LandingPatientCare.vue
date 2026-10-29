<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showImg = ref(false);
const imgContainer = ref(null);

let observer = null;

onMounted(() => {
  observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          showImg.value = false;
          setTimeout(() => {
            showImg.value = true;
          }, 10);
        } else {
          showImg.value = false;
        }
      });
    },
    {
      threshold: 0.3,
    }
  );
  if (imgContainer.value) {
    observer.observe(imgContainer.value);
  }
});

onBeforeUnmount(() => {
  if (observer && imgContainer.value) {
    observer.unobserve(imgContainer.value);
  }
});
</script>

<template>
  <div class="flex flex-col items-center align-middle text-center mx-auto mt-32 max-w-[1200px] w-full px-6">
    <div ref="imgContainer">
      <transition name="fade-slide-up">
        <img
          v-if="showImg"
          src="/icons/care.png"
          alt="Briga o pacijentu"
          class="w-24 h-24 select-none"
        />
      </transition>
    </div>
    <p class="mt-8 text-base md:text-lg max-w-[42rem] text-gray-700 leading-relaxed">
      Posebnu pažnju posvećujemo povjerenju i diskreciji. Vaše zdravlje i osjećaj sigurnosti su nam na prvom mjestu. Gradimo odnos koji traje - temeljen na poštovanju, povjerenju i stručnosti.
    </p>
    <div class="relative mt-32 md:mt-40 w-full overflow-hidden rounded-3xl bg-linear-to-br from-accent to-accent-dark px-6 py-12 md:py-16 shadow-xl shadow-accent/20">
      <div class="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10"></div>
      <div class="absolute -left-10 -bottom-20 w-56 h-56 rounded-full bg-white/10"></div>
      <p class="relative max-w-[48rem] mx-auto text-lg md:text-xl italic text-white font-semibold leading-relaxed">
        Poliklinika Eleos nije samo mjesto gdje dolazite po dijagnozu - to je mjesto gdje osjećate da ste važni. Dobro došli!
      </p>
      <div class="relative flex flex-wrap justify-center gap-3 mt-8">
        <a href="tel:+38766012021"
          class="inline-flex items-center px-6 py-3 rounded-full bg-white text-accent-dark text-sm font-semibold tracking-wide hover:bg-cream transition-colors">
          +387 66 012 021
        </a>
        <RouterLink to="/kontakt"
          class="inline-flex items-center px-6 py-3 rounded-full border border-white/70 text-white text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors">
          Kako do nas &rarr;
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1);
}
.fade-slide-up-enter-from,
.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(32px);
}
.fade-slide-up-enter-to,
.fade-slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
