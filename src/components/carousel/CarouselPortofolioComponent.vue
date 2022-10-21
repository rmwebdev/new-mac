<template>
  <div class="w-full" v-if="portofolio_lists != null">
    <!-- <q-scroll-observer @scroll="onScroll" /> -->

    <Carousel
      :itemsToShow="1.5"
      :wrapAround="false"
      v-model="carousel_is_active"
      :mouseDrag="true"
      id="Slider"
    >
      <Slide
        style="height: 400px"
        class="col-10 rounded-xl q-px-lg"
        v-for="(item, index) in portofolio_lists"
        :key="index"
      >
        <q-img
          style="border-radius: 10px"
          class="w-full h-full"
          no-spinner
          :src="item.bg_img"
        >
          <div class="row w-full h-full self-center bg-transparent">
            <div class="col-1 self-center"  @click="prev()">
              <q-btn
                v-if="index == carousel_is_active && index != 0"
                @click="prev()"
                dense
                flat
                round
                style="background-color: #ffffff; color: #0f5e80"
                icon="fas fa-chevron-left"
              ></q-btn>
            </div>
            <div class="col row justify-center self-center">
              <img
                no-spinner
                :src="item.icon"
                style="width: 60%; height: 60%"
              />
            </div>
            <div class="col-6 column self-center q-px-md">
              <q-img :src="item.svg" fit="contain-" class="mb-2"></q-img>
            </div>
            <div class="col-1 self-center"  @click="next()">
              <q-btn
                v-if="
                  index == carousel_is_active &&
                  index + 1 != portofolio_lists.length
                "
                @click="next()"
                dense
                flat
                round
                style="background-color: #ffffff; color: #0f5e80"
                icon="fas fa-chevron-right"
              ></q-btn>
            </div>
          </div>
        </q-img>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  props: {
    portofolio_lists: null,
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      carousel_is_active: 0,
    };
  },
  methods: {
    next() {
      this.carousel_is_active++;
    },
    prev() {
      this.carousel_is_active--;
    },
    // onScroll (info) {
    //   if(info.direction === "down" && info.position.top > 1500){
    //     document.location
    //     }
    // },
  },
  async mounted() {
  //  await this.next()
  //  await this.prev()
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
