<template>
  <section class="py-14 md:py-24 bg-[#0000000a]">
    <div class="container">
      <h2
        class="font-semibold text-2xl md:text-[40px] md:leading-normal mb-6 md:mb-16 uppercase"
      >
        GALERIJA
      </h2>
      <CoolLightBox :items="items" :index="index" @close="index = null"> </CoolLightBox>

      <div class="grid grid-cols-1 gap-2 mb-8 -mx-4 md:grid-cols-3 md:mx-0">
        <div
          class="bg-center bg-no-repeat bg-cover cursor-pointer aspect-square"
          v-for="(image, imageIndex) in visibleItems"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
      </div>
      <div
        class="flex items-center justify-end cursor-pointer"
        @click="showAll = !showAll"
      >
        {{ ctaText }}
        <img class="w-6 h-6 ml-2" src="/img/more.svg" alt="ziureti daugiau" />
      </div>
    </div>
  </section>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  name: 'Gallery',
  components: {
    CoolLightBox,
  },
  data() {
    return {
      showAll: false,
      items: [
        'https://1.bp.blogspot.com/-7dVEfo-4z5w/YMi1T2TCzMI/AAAAAAAABoQ/lXMdAU8tAt0dJl4lUArP8ENfsob3Te62QCLcBGAsYHQ/s1335/IMG_20210615_171007.jpg',
        'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s16000/222.jpg',
        'https://1.bp.blogspot.com/-7dVEfo-4z5w/YMi1T2TCzMI/AAAAAAAABoQ/lXMdAU8tAt0dJl4lUArP8ENfsob3Te62QCLcBGAsYHQ/s1335/IMG_20210615_171007.jpg',
        'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s16000/222.jpg',
        'https://1.bp.blogspot.com/-7dVEfo-4z5w/YMi1T2TCzMI/AAAAAAAABoQ/lXMdAU8tAt0dJl4lUArP8ENfsob3Te62QCLcBGAsYHQ/s1335/IMG_20210615_171007.jpg',
        'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s16000/222.jpg',
        'https://1.bp.blogspot.com/-7dVEfo-4z5w/YMi1T2TCzMI/AAAAAAAABoQ/lXMdAU8tAt0dJl4lUArP8ENfsob3Te62QCLcBGAsYHQ/s1335/IMG_20210615_171007.jpg',
        'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s16000/222.jpg',
      ],
      index: null,
    }
  },
  computed: {
    visibleItems() {
      return this.showAll ? this.items : this.items.slice(0, 6)
    },
    ctaText() {
      return this.showAll ? 'Suskleisti' : 'Žiūrėti daugiau'
    },
  },
}
</script>

<style></style>
