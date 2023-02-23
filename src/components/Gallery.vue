<template>
  <section class="bg-[#0000000a]" ref="gallery">
    <div class="container">
      <h2
        class="font-semibold text-2xl md:text-[40px] md:leading-normal mb-6 md:mb-16 uppercase"
      >
        GALERIJA
      </h2>
      <CoolLightBox :items="items" :index="index" @close="index = null"> </CoolLightBox>

      <div class="grid grid-cols-1 gap-2 mb-8 -mx-4 md:grid-cols-3 md:mx-0">
        <div
          class="duration-200 bg-center bg-no-repeat bg-cover cursor-pointer aspect-square hover:opacity-90"
          v-for="(image, imageIndex) in visibleItems"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
      </div>
      <div
        class="flex items-center justify-end duration-200 transform cursor-pointer md:mb-6 hover:translate-x-1"
        @click="showAll = !showAll"
      >
        {{ ctaText }}
        <img class="w-6 h-6 ml-2" src="/img/more.svg" alt="toggle view more" />
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
        '/img/gallery/img-1.jpg',
        '/img/gallery/img-2.jpg',
        '/img/gallery/img-3.jpg',
        '/img/gallery/img-4.jpg',
        '/img/gallery/img-5.jpg',
        '/img/gallery/img-6.jpg',
        '/img/gallery/img-7.jpg',
        '/img/gallery/img-8.jpg',
        '/img/gallery/img-9.jpg',
        '/img/gallery/img-10.jpg',
        '/img/gallery/img-11.jpg',
        '/img/gallery/img-12.jpg',
        '/img/gallery/img-13.jpg',
        '/img/gallery/img-14.jpg',
        '/img/gallery/img-15.jpg',
        '/img/gallery/img-16.jpg',
        '/img/gallery/img-17.jpg',
        '/img/gallery/img-18.jpg',
        '/img/gallery/img-19.jpg',
        '/img/gallery/img-20.jpg',
        '/img/gallery/img-21.jpg',
        '/img/gallery/img-22.jpg',
        '/img/gallery/img-23.jpg',
        '/img/gallery/img-24.jpg',
        '/img/gallery/img-25.jpg',
        '/img/gallery/img-26.jpg',
        '/img/gallery/img-27.jpg',
        '/img/gallery/img-28.jpg',
        '/img/gallery/img-29.jpg',
        '/img/gallery/img-30.jpg',
        '/img/gallery/img-31.jpg',
        '/img/gallery/img-32.jpg',
      ],
      index: null,
    }
  },
  watch: {
    showAll(val) {
      if (!val) {
        this.$refs.gallery.scrollIntoView()
      }
    },
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
