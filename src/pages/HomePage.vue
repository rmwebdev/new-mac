<template>
  <q-layout>
    <!-- <q-page-container> -->
      <q-page>
        <!-- <div class="fixed-center" v-if="isLoad">
          <q-spinner-gears size="80px" color="primary" />
        </div>
        <div v-show="!isLoad"> -->
          <q-header class="bg-header">
            <q-toolbar class="justify-between sm:px-20">
              <div class="cursor-pointer">
                <q-img
                  no-spinner
                  src="~/assets/images/logo_img.svg"
                  class="w-24 h-6"
                />
              </div>

              <div class="row q-gutter-x-sm">
                <div class="row self-center q-gutter-x-sm !hidden sm:!flex">
                  <q-btn dense outline round color="white">
                    <img
                      no-spinner
                      src="~/assets/icons/facebook_icon.svg"
                      class="w-3 h-5"
                    />
                  </q-btn>
                  <q-btn dense outline round color="white">
                    <img
                      no-spinner
                      src="~/assets/icons/twitter_icon.svg"
                      class="w-4 h-4"
                    />
                  </q-btn>
                  <q-btn dense outline round color="white">
                    <img
                      no-spinner
                      src="~/assets/icons/youtube_icon.svg"
                      class="w-5 h-3"
                    />
                  </q-btn>
                  <q-btn dense outline round color="white">
                    <img
                      no-spinner
                      src="~/assets/icons/instagram_icon.svg"
                      class="w-4 h-4"
                    />
                  </q-btn>
                </div>
                <div class="self-center !hidden sm:!flex">
                  <q-btn-dropdown
                    class="btn--no-hover"
                    text-color="white"
                    flat
                    color="transparent"
                    dense
                    label="ID"
                  ></q-btn-dropdown>
                </div>
                <div
                  class="rounded-full q-px-md q-py-xs cursor-pointer self-center"
                  style="color: #124981; background-color: #ffffff; font-weight: 600"
                >
                  Kontak kami
                </div>
              </div>
            </q-toolbar>
          </q-header>
          <hero-component />
          <main-component />
          <benefit-component />
          <feature-component />
          <portofolio-component />
          <testi-component />
          <footer-component />
        <!-- </div> -->
      </q-page>
    <!-- </q-page-container> -->
  </q-layout>
</template>

<script>
import HeroComponent from "src/components/Hero.vue";
import MainComponent from "src/components/Main.vue";
import BenefitComponent from "src/components/Benefit.vue";
import FeatureComponent from "src/components/Feature.vue";
import PortofolioComponent from "src/components/Portofolio.vue";
import TestiComponent from "src/components/Testi.vue";
import FooterComponent from "src/components/Footer.vue";
export default {
  components: {
    "hero-component": HeroComponent,
    "main-component": MainComponent,
    "benefit-component": BenefitComponent,
    "feature-component": FeatureComponent,
    "portofolio-component": PortofolioComponent,
    "testi-component": TestiComponent,
    "footer-component": FooterComponent,
  },
  data() {
    return {
      isLoad: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loadingPage();
    }, 3000);
  },
  methods: {
    loadingPage() {
      this.isLoad = false;
    },
  },
};
</script>

<style></style>