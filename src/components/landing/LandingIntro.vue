<template>
  <div class="max-w-[1200px] mx-auto px-6 md:-mt-12 w-full">
    <div class="relative overflow-hidden w-full bg-linear-to-br from-light/30 via-cream to-white rounded-3xl md:rounded-[2.5rem] border border-accent/20">
      <div class="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-light/30 blur-3xl"></div>
      <div class="relative flex flex-col lg:flex-row lg:justify-between lg:space-x-24 max-w-[1400px] px-4 md:px-6 lg:px-24 py-16 lg:py-24 mx-auto">
        <div class="flex-shrink-0">
          <img src="/images/logo.png" alt="Poliklinika Eleos logo small" class="h-44 md:h-52 mx-auto" />
        </div>
        <div class="flex flex-col mt-16 lg:mt-0 justify-center px-4 lg:px-0 text-center md:text-right">
          <p class="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-dark">O nama</p>
          <p class="mt-2 text-2xl font-semibold text-gray-900">Zašto izabrati baš nas?</p>
          <p class="mt-4 lg:w-3/4 lg:ml-auto text-gray-700 leading-relaxed">U moru zdravstvenih ustanova, Poliklinika Eleos se izdvaja po iskrenoj posvećenosti svakom pacijentu. Naši ljekari su vrhunski stručnjaci sa bogatim iskustvom, ali prije svega - ljudi koji slušaju, razumiju i pristupaju sa empatijom.</p>
          <RouterLink to="/o-nama" class="mt-6 mx-auto md:mr-0 md:ml-auto text-sm font-semibold text-accent-dark hover:text-gray-900 transition-colors">
            Saznajte više &rarr;
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
