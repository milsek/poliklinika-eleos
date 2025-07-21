<script setup>
import { useHead } from '@unhead/vue';
import LandingCover from '@/components/landing/LandingCover.vue';
import LandingIntro from '@/components/landing/LandingIntro.vue';
import LandingOffice from '@/components/landing/LandingOffice.vue';
import LandingPatientCare from '@/components/landing/LandingPatientCare.vue';

useHead({
  title: 'Poliklinika Eleos Brčko - Sve najvažnije na jednom mjestu',
  link: [
    {
      rel: 'canonical',
      href: 'https://poliklinikaeleos.com'
    }
  ],
});
</script>

<template>
  <div class="flex flex-col space-y-24 pb-12">
    <LandingCover />
    <LandingIntro />
    <LandingOffice />
    <LandingPatientCare />
  </div>
</template>
