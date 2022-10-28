<template>
  <q-layout>
      <q-page>
          <q-header class="bg-header">
            <q-toolbar class="justify-between sm:px-20">
              <div class="cursor-pointer">
                <q-img
                  no-spinner
                  src="~/assets/images/logo_img.svg"
                  class="w-24 h-6"
                />
              </div>

              <div class="row q-gutter-x">
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
                <a href="#"  @click="sendWA()">
                  Kontak kami
                 </a>
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
          <footer-component :message="message"  />
           <q-page-sticky position="bottom-right" :offset="[20, 20]" style="z-index:99; margin:5px !important;" @click="sendWA()">
              <!-- class="w-[9vw] sm:w-[6vw] md:w-[4vw] lg:w-[3vw]" -->
            <!-- <q-btn round flat dense> -->
            <q-img
              class="w-52 !sm:w-52"
              no-spinner
              src="~/assets/icons/wa-02.png"
            ></q-img>
          <!-- </q-btn> -->
        </q-page-sticky>
      </q-page>
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
      message: `Hai MONSTERMAC!%0aNama pribadi:%0aNama Perusahaan:%0aEmail:%0aKeperluan:`
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
    async sendWA(){
       window.open(`https://web.whatsapp.com/send?phone=6281315009788&text=${this.message}`, '_blank');
    }
  },
};
</script>

<style></style>
