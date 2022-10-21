<template>
  <div style="background-color: #f8f8fa">
    <div
      class="q-pt-md row justify-center text-center text-base md:text-xl sm:mt-8 sm:pt-10"
      style="color: #141313; font-weight: 600"
    >
      Kami siap membantu Anda <br />
      mengembangkan bisnis dengan <br />
      Vending Machine
    </div>
    <div
      class="row justify-center text-center text-base md:text-xl mt-5 sm:mt-8"
      style="color: #9c9c9c; font-weight: 500"
    >
      Jangan ragu menghubungi kami terkait <br />
      kebutuhan vending machine Anda! Kami
    </div>
    <div class="row justify-center mt-4 md:mt-6">
      <div
        class="rounded-full q-px-md q-py-xs md:py-2 md:px-5 cursor-pointer self-center"
        style="color: #ffffff; background-color: #124981; font-weight: 600"
      >
      <a href="https://web.whatsapp.com/send?phone=6281315009788" target="_blank">
                  Kontak kami
                 </a>
      </div>
    </div>
    <!-- Dekstop -->
    <div class="mt-10 sm:mt-14 !hidden sm:!flex column">
      <div class="row justify-center mb-[-27px]">
        <div
          @click="scrollToTop()"
          class="rounded-full bg-white q-pa-sm shadow-md shadow-slate-500 cursor-pointer"
          style="z-index: 999"
        >
          <div class="rounded-full" style="background-color: #124981">
            <img
              style="width: 40px; height: 40px"
              no-spinner
              src="~/assets/images/btn_footer_img.png"
            />
          </div>
        </div>
      </div>
      <q-img
        class="w-full"
        no-spinner
        src="~/assets/images/footer_img.svg"
        style="z-index: 1"
      >
        <div
          class="bg-transparent w-full h-full column text-center justify-center text-base"
          style="font-weight: 500"
        >
          <div class="pt-16">www.monstermac.id</div>
        </div>
      </q-img>
    </div>

    <!-- Mobile -->
    <div class="!flex sm:!hidden mt-10 column">
      <div class="row justify-center mb-[-20px]">
        <div
          @click="scrollToTop()"
          class="rounded-full bg-white q-pa-sm shadow-md shadow-slate-500 cursor-pointer"
          style="z-index: 999"
        >
          <div class="rounded-full" style="background-color: #124981">
            <img
              style="width: 25px; height: 25px"
              no-spinner
              src="~/assets/images/btn_footer_img.png"
            />
          </div>
        </div>
      </div>

      <q-img
        class="w-full"
        no-spinner
        src="~/assets/images/mobile_footer_img.svg"
        style="z-index: 1"
      >
        <div
          class="bg-transparent w-full h-full column text-center justify-center text-sm"
          style="font-weight: 500"
        >
          <div class="pt-10">www.monstermac.id</div>
        </div>
      </q-img>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    scrollToTop() {
      // window.scrollTo(0, 0);
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style></style>
