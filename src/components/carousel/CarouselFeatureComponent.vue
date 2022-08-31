<template>
  <div v-if="feature_lists != null">
    <Carousel
      :itemsToShow="1.3"
      :wrapAround="true"
      v-model="carousel_is_active"
    >
      <Slide class="col-10 q-pa-sm" v-for="item in feature_lists" :key="item">
        <div class="column">
          <div class="row justify-center">
            <div
              class="text-center q-px-md q-py-xs rounded-full text-base"
              style="border: solid 1px #576170; font-weight: 600"
            >
              {{ item.category }}
            </div>
          </div>
          <div
            class="mt-4 rounded-xl q-pa-md"
            style="border: solid 1px #c5c5c5; font-weight: 600"
          >
            <div
              class="row mt-4"
              v-for="sub_list in item.sub_lists"
              :key="sub_list"
            >
              <div class="col-1">
                <img
                  no-spinner
                  src="~/assets/icons/arrow_right_black_icon.svg"
                  style="width: 80%"
                />
              </div>
              <div
                class="col text-base column self-start text-left pl-2"
                style="color: #141313; font-weight: 600"
              >
                <div>{{ sub_list.name }}</div>
                <div class="text-xs" style="color: #576170; font-weight: 500">
                  {{ sub_list.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
    <div class="row justify-center q-gutter-x-sm mt-5">
      <div
        v-for="(item, index) in feature_lists"
        :key="item"
        style="width: 10px; height: 10px; border-radius: 50%"
        :style="
          index == carousel_is_active
            ? 'background-color: #124981'
            : 'background-color: #E0E0E0'
        "
      ></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  props: {
    feature_lists: null,
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
  mounted() {},
});
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
