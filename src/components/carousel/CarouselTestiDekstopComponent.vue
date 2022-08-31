<template>
  <div class="w-full mt-5 row" v-if="testi_lists != null">
    <div class="col-1 row text-center justify-center self-center">
      <q-btn
        v-if="carousel_is_active != 0"
        @click="prev()"
        dense
        flat
        round
        style="background-color: grey; color: #ffffff"
        icon="fas fa-chevron-left"
        size="md"
      ></q-btn>
    </div>
    <div class="col self-center">
      <!-- Medium -->
      <Carousel
        class="!hidden lg:!flex"
        :mouseDrag="false"
        :itemsToShow="3"
        :wrapAround="false"
        v-model="carousel_is_active"
      >
        <Slide
          class="rounded-xl q-px-sm"
          :class="index != carousel_is_active ? 'opacity-20 scale-90' : ''"
          v-for="(item, index) in testi_lists"
          :key="item"
        >
          <div class="column q-px-xl">
            <div class="row">
              <div class="col-3 self-start row justify-center">
                <q-img
                  no-spinner
                  src="~/assets/images/avatar_img.png"
                  style="width: 60px"
                ></q-img>
              </div>
              <div class="col column pl-3">
                <div
                  class="text-lg font-bold text-left"
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
            <div class="row text-justify text-sm mt-3" style="color: #141313">
              "{{ item.message }}"
            </div>
          </div>
        </Slide>
      </Carousel>
      <!-- Small -->
      <Carousel
        class="!flex lg:!hidden"
        :mouseDrag="false"
        :itemsToShow="2"
        :wrapAround="false"
        v-model="carousel_is_active"
      >
        <Slide
          class="rounded-xl q-px-sm"
          :class="index != carousel_is_active ? 'opacity-20 scale-90' : ''"
          v-for="(item, index) in testi_lists"
          :key="item"
        >
          <div class="column q-px-lg">
            <div class="row">
              <div class="col-3 self-start row justify-center">
                <q-img
                  no-spinner
                  src="~/assets/images/avatar_img.png"
                  style="width: 60px"
                ></q-img>
              </div>
              <div class="col column pl-2">
                <div
                  class="text-lg font-bold text-left"
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
            <div class="row text-justify text-sm mt-3" style="color: #141313">
              "{{ item.message }}"
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
    <div class="col-1 row text-center self-center justify-center">
      <q-btn
        v-if="testi_lists.length != carousel_is_active + 1"
        @click="next()"
        dense
        flat
        round
        style="background-color: grey; color: #ffffff"
        icon="fas fa-chevron-right"
        size="md"
      ></q-btn>
    </div>
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
  },
};
</script>

<style></style>
