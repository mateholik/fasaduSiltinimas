<template>
  <section style="background: rgba(0, 0, 0, 0.04)">
    <div class="container">
      <h2 class="font-semibold text-2xl md:text-[40px] md:leading-normal mb-10 md:mb-16">
        KONTAKTAI
      </h2>
      <div class="md:text-2xl font-medium text-white md:max-w-[452px]">
        <a :href="`tel:${$root.phone}`" class="flex bg-[#636363] px-4 py-3 md:p-6 mb-4">
          <img
            class="w-4 h-4 mr-2 md:w-6 md:h-6"
            src="/img/phone-white.svg"
            alt="phone"
          />
          {{ $root.phone }}
        </a>
        <a
          :href="`mailto:${$root.email}`"
          class="flex bg-[#636363] px-4 py-3 md:p-6 mb-4"
        >
          <img class="w-4 h-4 mr-2 md:w-6 md:h-6" src="/img/mail-white.svg" alt="mail" />
          {{ $root.email }}
        </a>
        <a
          v-if="$root.facebook"
          :href="$root.facebook"
          target="_blank"
          class="flex bg-[#636363] px-4 py-3 md:p-6 mb-4"
        >
          <img
            class="w-4 h-4 mr-2 md:w-6 md:h-6"
            src="/img/fb-white.svg"
            alt="facebook"
          />
          {{ $root.facebook }}
        </a>
        <div class="flex bg-[#636363] px-4 py-3 md:p-6 mb-4">
          <img
            class="w-4 h-4 mr-2 md:w-6 md:h-6"
            src="/img/clock-white.svg"
            alt="clock"
          />
          <div class="text-right">
            <div v-html="$root.hours_one"></div>
            <div v-html="$root.hours_two"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contacts',
}
</script>

<style></style>
