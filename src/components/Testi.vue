<template>
  <div class="pb-20">
    <div
      class="row mt-5 md:mt-8 justify-center text-lg sm:text-2xl"
      style="color: #141313; font-weight: 600"
    >
      Lebih Jauh Mendengar <br />
      Cerita Pengguna Kami
    </div>
    <!-- Mobile -->
    <div class="row justify-center mt-8 !flex sm:!hidden">
      <carousel-testi-component :testi_lists="testi_lists" />
    </div>
    <!-- Dekstop -->
    <div class="row justify-center mt-8 !hidden sm:!flex">
      <carousel-testi-dekstop-component :testi_lists="testi_lists" />
    </div>
  </div>
</template>

<script>
import CarouselTestiComponent from "src/components/carousel/CarouselTestiComponent.vue";
import CarouselTestiDekstopComponent from "src/components/carousel/CarouselTestiDekstopComponent.vue";
export default {
  components: {
    "carousel-testi-component": CarouselTestiComponent,
    "carousel-testi-dekstop-component": CarouselTestiDekstopComponent,
  },
  data() {
    return {
      testi_lists: [
        {
          person_name: "Rahman",
          person_status: "Pemilik vending machine di Cafe Biru",
          message:
            "Membantu sekali saat stock minuman habis! Saya jual kopi tapi retail tetap laku jadi win-win solution buat saya.",
        },
        {
          person_name: "Farel",
          person_status: "Pemilik vending machine di Cafe Biru",
          message:
            "Membantu sekali saat stock minuman habis! Saya jual kopi tapi retail tetap laku jadi win-win solution buat saya.",
        },
        {
          person_name: "Dio",
          person_status: "Pemilik vending machine di Cafe Biru",
          message:
            "Membantu sekali saat stock minuman habis! Saya jual kopi tapi retail tetap laku jadi win-win solution buat saya.",
        },
        {
          person_name: "Neo",
          person_status: "Pemilik vending machine di Cafe Biru",
          message:
            "Membantu sekali saat stock minuman habis! Saya jual kopi tapi retail tetap laku jadi win-win solution buat saya.",
        },
      ],
    };
  },
};
</script>

<style></style>
