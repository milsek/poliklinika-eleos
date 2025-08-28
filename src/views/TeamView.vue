<script setup>
import { useHead } from '@unhead/vue';

useHead({
  title: 'Naš tim - Poliklinika Eleos',
});

const team = [
  {
    name: "Dr Jelena Živanović",
    specialty: "specijalista ginekologije i akušerstva",
  },
  {
    name: "Prof. dr Nermina Hadžigrahić",
    specialty: "specijalista dermatovenerologije",
  },
  {
    name: "Dr Aleksandra Vukov",
    specialty: "pedijatar, subspecijalista pulmologije, alergologije i imunologije",
  },
  {
    name: "Dr Ivka Džuveleković",
    specialty: "specijalista pedijatrije",
  },
  {
    name: "Dr Sanda Mijatović",
    specialty: "internista, subspecijalista onkologije",
  },
  {
    name: "Dr Biljana Radulović",
    specialty: "internista, subspecijalista angiologije",
  },
  {
    name: "Dr Bojana Simić",
    specialty: "internista, subspecijalista hematologije",
  },
  {
    name: "Dr Aleksandar Plašić",
    specialty: "specijalista psihijatrije",
  },
  {
    name: "Zdravka Stjepanović",
    specialty: "medicinski tehničar",
  },
];
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center px-6 lg:px-10 pt-28 md:pt-40 pb-8">
    <div class="max-w-[900px] mx-auto w-full">
      <p class="text-lg mb-8">
        Naš tim čine vrhunski stručnjaci sa bogatim iskustvom i iskrenom posvećenošću svakom pacijentu. Pored profesionalnosti i znanja, odlikuje ih toplina, pažnja i briga za Vaše zdravlje, kako bi svaki susret u Poliklinici Eleos bio siguran, prijatan i ispunjen povjerenjem.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-for="member in team"
          :key="member.name"
          class="flex flex-col items-center bg-white rounded-2xl border border-accent/30 px-4 py-10 md:p-6"
        >
          <div class="flex items-center justify-center w-20 h-20 rounded-4xl bg-accent/40 mb-4">
          </div>
          <div class="text-center">
            <div class="font-semibold text-lg text-gray-900">{{ member.name }}</div>
            <div class="text-gray-600 text-sm mt-1">{{ member.specialty }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>