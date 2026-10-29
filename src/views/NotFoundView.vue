<template>
  <div class="flex flex-col justify-center min-h-screen px-6 lg:px-10 pt-36 md:pt-48 pb-20">
    <div class="mx-auto text-center w-full">
      <h1 class="text-9xl md:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-br from-light to-accent-dark w-56 mx-auto">404</h1>
      <div class="mt-4 h-1 w-16 rounded-full bg-accent mx-auto"></div>
      <p class="mt-4 text-gray-600">Stranica ne postoji</p>
      <RouterLink to="/"
        class="inline-flex mt-8 px-6 py-3 rounded-full bg-accent text-white text-sm font-semibold tracking-wide hover:bg-accent-dark transition-colors">
        Nazad na početnu
      </RouterLink>
    </div>
  </div>
</template>
