<template>
  <q-layout view="lHh Lpr lFf">
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

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
