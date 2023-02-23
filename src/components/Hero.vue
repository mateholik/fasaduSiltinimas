<template>
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
          <div
            @click="scrollToSection($root.menuList[2].id)"
            class="cursor-pointer inline-block px-6 md:px-10 py-2 md:py-3 text-sm md:text-lg font-semibold bg-white text-[#222] hover:bg-[#DADADA] duration-200 leading-6"
            style="box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5)"
          >
            GALERIJA
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    },
  },
}
</script>

<style></style>
