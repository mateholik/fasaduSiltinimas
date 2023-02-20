<template>
  <div id="app">
    <Header />
    <section
      class="bg-gray-900 bg-center bg-no-repeat bg-cover"
      :style="{
        'background-image': 'url(/img/bg-hero.jpeg)',
      }"
    >
      <div class="container">
        <div class="min-h-[452px] md:min-h-[640px] flex items-center text-white">
          <div class="w-[634px]">
            <h1
              class="text-6xl font-semibold text-[32px] md:text-[64px] mb-4 md:mb-6 leading-normal"
            >
              FASADŲ ŠILTINIMAS
            </h1>
            <p class="font-medium text-lg md:text-[28px] md:leading-normal mb-8 md:mb-10">
              Kokybiški pamatų ir fasadų apšiltinimo darbai pagal Jūsų norus bei lūkesčius
            </p>
            <a
              href="#gallery"
              class="px-10 py-3 text-lg font-semibold bg-white text-[#222] hover:bg-[#DADADA] duration-200"
              style="box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5)"
              >GALERIJA</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="py-14 md:py-24">
      <div class="container">
        <div class="items-center md:flex md:space-x-12">
          <div class="mb-10 md:w-1/2 md:mb-0">
            <h2
              class="font-semibold text-2xl md:text-[40px] md:leading-normal mb-6 md:mb-8"
            >
              APIE MUS
            </h2>
            <p class="mb-4 md:mb-6 md:text-xl">
              Esame nedidėlė įmonė kurios pagrindinės veiklos kryptys tai:
            </p>
            <ul class="md:text-xl">
              <li class="flex items-center mb-2 md:mb-6">
                <img src="/img/check.svg" alt="check" class="mr-2" /> Individualių namų
                fasadų apšiltinimas
              </li>
              <li class="flex items-center mb-2 md:mb-6">
                <img src="/img/check.svg" alt="check" class="mr-2" /> Pamatų apšiltinimas
              </li>
              <li class="flex items-center mb-2 md:mb-6">
                <img src="/img/check.svg" alt="check" class="mr-2" />Renovacija bei
                dekoravimas
              </li>
            </ul>
          </div>
          <img class="mx-auto md:w-1/2" src="/img/about.jpeg" alt="apie mus" />
        </div>
      </div>
    </section>
    <WhyUs class="py-14 md:py-24" />
  </div>
</template>
