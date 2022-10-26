<template>
  <div style="background-color: #ffffff; position: relative">
    <!-- Dekstop  -->
    <div class="row justify-center !hidden sm:!flex">
      <q-img
        no-spinner
        src="~/assets/images/bg_hero_dekstop_img.png "
        class="w-full h-full overflow-visible"
      >
        <div class="bg-transparent w-full h-full column justify-between">
          <div class="col-1"></div>
          <div class="col column">
            <div class="col">
              <div class="row justify-center">
                <q-img
                  class="w-[60%] h-[60%] md:w-[80%] md:h-[80%]"
                  no-spinner
                  src="~/assets/images/vend_text_img.svg"
                />
              </div>
            </div>
            <div class="col-7">
              <div class="row justify-center">
                <div class="columns-5 column">
                  <div
                    class="text-right text-base md:text-lg lg:text-2xl xl:text-3xl font-medium q-gutter-y-xs"
                    style="color: #ffffff; font-weight: 500"
                  >
                    <div>Smart Vending Machine</div>
                    <div>untuk Meningkatkan</div>
                    <div>Bisnis Anda</div>
                  </div>
                  <div
                    class="row text-right text-sm md:text-lg font-medium mt-2 md:mt-8 column vending__p"
                    style="color: #f8f8f8; font-weight: 500"
                  >
                    <div>Bisnis yang berkembang pesat menjadi dambaan</div>
                    <div>banyak pelaku bisnis. Tingkatkan bisnis Anda</div>
                    <div>dengan layanan hebat yang bisa diciptakan</div>
                    <div>oleh Smart Vending Machine.</div>
                  </div>
                </div>
                <div class="col-3 self-end ">
                  <q-img
                    class="w-[100%] md:w-[110%] h-[90%] mt-[-70px] md:mt-[-110px] xl:mt-[-130px] vending__image"
                    no-spinner
                    src="~/assets/images/vend_img.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-img>
    </div>

    <!-- Mobile -->
    <div class="row justify-center !flex sm:!hidden">
      <q-img
        no-spinner
        src="~/assets/images/bg_hero_img.png"
        class="w-full h-auto"
      >
        <div class="column q-px-md q-pt-xl bg-transparent">
          <div
            class="row text-center text-lg font-medium justify-center"
            style="color: #ffffff; font-weight: 500"
          >
            Smart Vending Machine <br />
            untuk Meningkatkan <br />
            Bisnis Anda
          </div>
          <div
            class="row text-center text-xs font-medium px-5 mt-3 vending__p"
            style="color: #f8f8f8; font-weight: 500"
          >
            Bisnis yang berkembang pesat menjadi dambaan banyak pelaku bisnis.
            Tingkatkan bisnis Anda dengan layanan hebat yang bisa diciptakan
            oleh Smart Vending Machine.
          </div>
          <div class="row justify-center mt-3 vending__text">
            <img no-spinner src="~/assets/images/vend_text_img.svg" />
          </div>
        </div>
      </q-img>
    </div>
    <div
      class="row justify-center sm:!hidden !flex mt-[-125px] vending__image"
      style="z-index: 99"
    >
      <img
        no-spinner
        src="~/assets/images/vend_img.png"
        style="width: 50%; z-index: 99"
        class=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>