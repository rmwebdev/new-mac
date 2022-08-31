<template>
  <div class="mt-5">
    <!-- Mobile -->
    <div class="!flex sm:!hidden q-pa-md">
      <q-carousel
        dense
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        animated
        control-color="white"
        padding
        arrows
        height="250px"
        class="bg-primary text-white shadow-1 w-full rounded-lg"
      >
        <q-carousel-slide
          v-for="item in carousel_portofolio_lists"
          :key="item"
          :name="item.title"
          class="column no-wrap rounded-lg"
          style="padding: 0px"
        >
          <q-img
            class="h-full w-full rounded-lg"
            no-spinner
            src="~/assets/images/bg_kfc_img.png"
          >
            <div class="row w-full h-full self-center bg-transparent">
              <div class="col row justify-center self-center">
                <img
                  no-spinner
                  src="~/assets/images/kfc_img.png"
                  style="width: 100%; height: 100%"
                />
              </div>
              <div class="col-7 column self-center">
                <div class="text-base" style="color: #ffffff; font-weight: 700">
                  {{ item.title }}
                </div>
                <div
                  class="text-base mt-3"
                  style="color: #ffffff; font-weight: 600"
                >
                  Fitur
                </div>

                <div
                  v-for="fitur in item.fitur_lists"
                  :key="fitur"
                  class="text-xs mt-2"
                  style="color: #ffffff; font-weight: 400"
                >
                  • {{ fitur.description }}
                </div>
              </div>
            </div>
          </q-img>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <!-- Dekstop -->
    <div class="!hidden sm:!flex q-pa-md">
      <carousel-portofolio-component
        :portofolio_lists="carousel_portofolio_lists"
      />
    </div>
  </div>
</template>

<script>
import carouselPortofolioComponent from "src/components/carousel/CarouselPortofolioComponent.vue";
export default {
  components: {
    "carousel-portofolio-component": carouselPortofolioComponent,
  },
  data() {
    return {
      slide: "KFC",
      carousel_portofolio_lists: [
        {
          title: "KFC",
          fitur_lists: [
            {
              description:
                "Metode pembayaran menggunakan barcode scanner yang terintegrasi dengan aplikasi back office KFC",
            },
            {
              description:
                "Musik CD dapat diputar terlebih dahulu sebelum membeli CD album yang diinginkan",
            },
          ],
        },
        {
          title: "KFC2",
          fitur_lists: [
            {
              description:
                "Metode pembayaran menggunakan barcode scanner yang terintegrasi dengan aplikasi back office KFC",
            },
            {
              description:
                "Musik CD dapat diputar terlebih dahulu sebelum membeli CD album yang diinginkan",
            },
          ],
        },
        {
          title: "KFC3",
          fitur_lists: [
            {
              description:
                "Metode pembayaran menggunakan barcode scanner yang terintegrasi dengan aplikasi back office KFC",
            },
            {
              description:
                "Musik CD dapat diputar terlebih dahulu sebelum membeli CD album yang diinginkan",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
