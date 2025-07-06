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
          alt="Instagram"
          class="w-24 h-24 select-none"
        />
      </transition>
    </div>
    <p class="mt-8 text-lg max-w-[42rem]">
      Posebnu pažnju posvećujemo povjerenju i diskreciji. Vaše zdravlje i osjećaj sigurnosti su nam na prvom mjestu. Gradimo odnos koji traje - temeljen na poštovanju, povjerenju i stručnosti.
    </p>
    <div class="mt-48 bg-light/20 w-full py-6 px-6 rounded-2xl border-2 border-accent shadow-sm">
      <p class="max-w-[60rem] mx-auto text-lg italic text-accent font-semibold">
        Poliklinika Eleos nije samo mjesto gdje dolazite po dijagnozu - to je mjesto gdje osjećate da ste važni. Dobro došli!
      </p>
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
