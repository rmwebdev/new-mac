<template>
  <div class="w-full q-px-xs" v-if="testi_lists != null">
    <Carousel
      :itemsToShow="1.5"
      :wrapAround="false"
      v-model="carousel_is_active"
      class="row"
    >
      <Slide
        style="height: auto"
        class="col-10 rounded-xl q-px-sm"
        :class="index != carousel_is_active ? 'opacity-20 scale-75' : ''"
        v-for="(item, index) in testi_lists"
        :key="item"
      >
        <div class="column">
          <div class="row">
            <div class="col-3 self-start row justify-center">
              <q-img
                no-spinner
                src="~/assets/images/avatar_img.png"
                style="width: 80%"
              ></q-img>
            </div>
            <div class="col column">
              <div
                class="text-base font-bold text-left"
                style="color: #141313; font-weight: 500"
              >
                {{ item.person_name }}
              </div>
              <div
                class="text-sm font-bold text-left"
                style="color: #569beb; font-weight: 500"
              >
                {{ item.person_status }}
              </div>
            </div>
          </div>
          <div class="row text-justify text-sm" style="color: #141313">
            "{{ item.message }}"
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  props: {
    testi_lists: null,
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  mounted() {},
  data() {
    return {
      carousel_is_active: 0,
    };
  },
};
</script>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>
