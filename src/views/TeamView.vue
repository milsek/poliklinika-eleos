<script setup>
import { useHead } from '@unhead/vue';
import PageHeader from '@/components/common/PageHeader.vue';

const initials = (name) => name
  .replace(/^(Prof\.\s*)?dr\s+/i, '')
  .split(' ')
  .map((part) => part[0])
  .join('');

useHead({
  title: 'Naš tim - Poliklinika Eleos',
});

const team = [
  {
    name: "Dr Jelena Živanović",
    specialty: "specijalista ginekologije i akušerstva",
  },
  {
    name: "Dr Tamara Stojanović",
    specialty: "specijalista anesteziologije i ljekar estetske medicine",
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
  <div class="min-h-screen pt-28 md:pt-40 pb-10">
    <div class="max-w-[1200px] mx-auto px-6 w-full">
      <PageHeader title="Naš tim" />
      <p class="text-base md:text-lg mb-10 text-gray-700 leading-relaxed lg:w-5/6">
        Naš tim čine vrhunski stručnjaci sa bogatim iskustvom i iskrenom posvećenošću svakom pacijentu. Pored profesionalnosti i znanja, odlikuje ih toplina, pažnja i briga za Vaše zdravlje, kako bi svaki susret u Poliklinici Eleos bio siguran, prijatan i ispunjen povjerenjem.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="member in team"
          :key="member.name"
          class="group flex flex-col items-center bg-white rounded-3xl border border-gray-200 px-4 py-10 md:p-8 shadow-sm
          transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent/50"
        >
          <div class="flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-light/60 to-accent/60 ring-4 ring-cream mb-5
            text-xl font-bold text-white tracking-wider select-none">
            {{ initials(member.name) }}
          </div>
          <div class="text-center">
            <div class="font-semibold text-base text-gray-900">{{ member.name }}</div>
            <div class="text-gray-500 text-sm mt-1.5 leading-relaxed">{{ member.specialty }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>