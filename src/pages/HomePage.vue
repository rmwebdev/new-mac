<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <hero-component />
        <main-component />
        <benefit-component />
        <feature-component />
        <portofolio-component />
        <testi-component />
        <footer-component />
      </q-page>
    </q-page-container>
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
};
</script>

<style></style>
