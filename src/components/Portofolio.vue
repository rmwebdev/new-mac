<template>
  <div class="mt-5">
    <!-- Mobile -->
    <div class="!flex sm:!hidden q-pa-md text-sm">
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
          v-for="item in carousel_portofolio"
          :key="item"
          :name="item.title"
          class="column no-wrap rounded-lg"
          style="padding: 0px"
        >
          <q-img
            class="h-full w-full rounded-lg"
            no-spinner
            :src="item.bg_img"
          >
            <div class="row w-full h-full self-center bg-transparent">
              <div class="col row justify-center self-center">
                <img
                  no-spinner
                  :src="item.icon"
                  style="width: 100%; height: 100%"
                />
              </div>
              <div class="col-7 column self-center">
                <q-img :src="item.svg" fit="contain-" class="mb-2"></q-img>
              </div>
            </div>
          </q-img>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <!-- Dekstop -->
    <div class="!hidden sm:!flex q-pa-md">
      <carousel-portofolio-component
        :portofolio_lists="carousel_portofolio"
      />
      <!-- <carouselPortofolio /> -->
    </div>
  </div>
</template>

<script>
import carouselPortofolioComponent from "src/components/carousel/CarouselPortofolioComponent.vue";
import carouselPortofolio from "src/components/carousel/caroselPortfolio.vue";
export default {
  components: {
    "carousel-portofolio-component": carouselPortofolioComponent,
    // carouselPortofolio
  },
  data() {
    return {

      slide: "KFC",
      carousel_portofolio: [
        {
          bg_img:'images/bg_kfc_img.png',
          icon:'images/kfc_img.png',
          svg:'images/kfv.svg',
          title:'KFC',
        },
        {
          bg_img:'images/galeri-24.png',
          icon:'images/g-24.png',
          svg:'images/g-24.svg',
          title:'24',
        },
        {
          bg_img:'images/bg-gs-astra.png',
          icon:'images/gs-astra.png',
          svg:'images/gs-astra.svg',
          title:'astra',
        },
        {
          bg_img:'images/lakuemas-bg.png',
          icon:'images/lakuemas.png',
          svg:'images/lakuemas.svg',
          title:'lakuemas',
        },
        {
          bg_img:'images/ea-bg.png',
          icon:'images/ea.png',
          svg:'images/ea.svg',
          title:'ea',
        },
        
      ],

      // carousel_portofolio_lists: [
      //   {
      //     bg_img:'images/bg_kfc_img.png',
      //     title: "KFC",
      //     svg:'images/kfv.svg',
      //     icon:'images/kfc_img.png',
          
      //   },
      //   {
      //     bg_img:'images/bg_kfc_img.png',
      //     title: "KFC4",
      //     svg:'images/kfv.svg',
      //     icon:'images/kfc_img.png',
          
      //   },
        
      //   {
      //     bg_img:'images/bg-gs-astra.png',
      //     title: "KFC2",
      //     svg:'images/gs-astra.svg',
      //     icon:'images/gs-astra.png',
          
      //   },
      //   {

      //     bg_img:'images/lakuemas-bg.png',
      //     icon:'images/lakuemas.png',
      //     title: "KFC3",
      //     svg:'images/lakuemas.svg',
          
      //   },
      //   {
      //     bg_img:'images/ea-bg.png',
      //     title:'ea',
      //     icon:'images/ea.png',
      //     svg:'images/ea.svg',
      //   },
      // ],
    };
  },
};
</script>

<style></style>
