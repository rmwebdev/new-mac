<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "MainLayout",

  data() {
    return {
      country: "ID",
      country_options: ["ID"],
      scrolling: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        return (this.scrolling = true);
      } else {
        return (this.scrolling = false);
      }
    });
  },
});
</script>

<style>
.q-btn.btn--no-hover .q-focus-helper {
  display: none;
}

.bg-header {
  background-color: #12467f;
}

.bg-header-scroll {
  background-color: #f2f2f2;
}
</style>
