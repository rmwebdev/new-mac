<template>
  <div class="w-full" v-if="portofolio_lists != null">
    <Carousel
      :mouseDrag="false"
      :itemsToShow="2"
      :wrapAround="false"
      ref="carouselRef"
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
            <div class="col-1 self-center">
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
            <div class="col-1 self-center">
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
      this.$refs.carouselRef.restartCarousel();
      this.$refs.carouselRef.next();
      this.carousel_is_active++;
    },
    prev() {
      this.$refs.carouselRef.restartCarousel();
      this.$refs.carouselRef.prev();
      this.carousel_is_active--;
    },
  },
  async mounted() {},
};
</script>

<style scoped></style>