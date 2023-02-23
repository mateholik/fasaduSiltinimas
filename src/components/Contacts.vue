<template>
  <section style="background: rgba(0, 0, 0, 0.04)">
    <div class="container">
      <h2 class="font-semibold text-2xl md:text-[40px] md:leading-normal mb-10 md:mb-16">
        KONTAKTAI
      </h2>
      <div class="grid md:gap-4 md:grid-cols-2">
        <div class="mb-16 font-medium md:text-xl">
          <div>
            <a
              :href="`tel:${$root.phone}`"
              class="flex items-center mb-4 duration-200 transform hover:translate-x-1"
            >
              <img class="w-4 h-4 mr-2 md:w-6 md:h-6" src="/img/phone.svg" alt="phone" />
              {{ $root.phone }}
            </a>
            <a
              :href="`mailto:${$root.email}`"
              class="flex items-center mb-4 duration-200 transform hover:translate-x-1"
            >
              <img class="w-4 h-4 mr-2 md:w-6 md:h-6" src="/img/mail.svg" alt="mail" />
              {{ $root.email }}
            </a>
            <a
              v-if="$root.facebook"
              :href="$root.facebook"
              target="_blank"
              class="flex mb-4 duration-200 transform hover:translate-x-1"
            >
              <img class="w-4 h-4 mr-2 md:w-6 md:h-6" src="/img/fb.svg" alt="facebook" />
              {{ $root.facebook }}
            </a>
            <div class="flex mb-4">
              <img class="w-4 h-4 mr-2 md:w-6 md:h-6" src="/img/clock.svg" alt="clock" />
              <div class="text-right">
                <div v-html="$root.hours_one"></div>
                <div v-html="$root.hours_two"></div>
              </div>
            </div>
          </div>
          <img
            src="/img/sertifikatas.png"
            alt="sertifikatas"
            class="max-w-xs mx-auto mt-16 md:mx-0"
          />
        </div>
        <div>
          <img src="/img/sertifikatas-pilnas.jpeg" alt="sertifikatas" />
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
