<template>
  <div>
    <div
      class="row justify-center text-base sm:text-2xl mt-5"
      style="color: #141313; font-weight: 600"
    >
      <div>Fitur Smart Vending Machine&nbsp;</div>
      <div style="color: #104e81">MonsterMac</div>
    </div>
    <!-- Mobile -->
    <div class="!flex sm:!hidden mt-6">
      <carousel-feature-component :feature_lists="feature_lists" />
    </div>

    <!-- Dekstop -->
    <div class="!hidden sm:!flex row justify-center mt-8">
      <div
        class="col-lg-4 col-sm-5 column q-pa-sm"
        v-for="item in feature_lists"
        :key="item"
      >
        <div class="row justify-center">
          <div
            class="text-center q-px-md q-py-xs rounded-full text-base"
            style="border: solid 1px #576170; font-weight: 600"
          >
            {{ item.category }}
          </div>
        </div>
        <div
          class="mt-5 rounded-xl q-pa-md"
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
                style="width: 55%"
              />
            </div>
            <div
              class="col text-base column self-start"
              style="color: #141313; font-weight: 600"
            >
              <div>{{ sub_list.name }}</div>
              <div class="text-sm" style="color: #576170; font-weight: 500">
                {{ sub_list.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselFeatureComponent from "src/components/carousel/CarouselFeatureComponent";
export default {
  components: {
    "carousel-feature-component": CarouselFeatureComponent,
  },
  data() {
    return {
      feature_lists: [
        {
          category: "General",
          sub_lists: [
            {
              name: "Penjualan otomatis",
              description:
                "Tanpa kru, buat bisnis Anda mudah dengan biaya minimal",
            },
            {
              name: "Pembayaran non-tunai",
              description:
                "Dengan pembayaran e-wallet memudahkan transaksi pelanggan Anda tanpa uang tunai",
            },
            {
              name: "Chiller",
              description:
                "Produk yang tersaji akan selalu dingin dan segar terjaga kualitasnya",
            },
            {
              name: "Terjangkau",
              description:
                "Sesuaikan kebutuhan Anda dengan pilihan harga yang terjangkai dari kami memilai kerjasama nagi asil bersama kami",
            },
          ],
        },
        {
          category: "Bisnis",
          sub_lists: [
            {
              name: "Dasbor online dapat dikontrol di mana saja",
              description:
                "Pantau laporan transaksi, pendapatan dan interaksi secara online",
            },
            {
              name: "Mudahkan data untuk analisis bisnis",
              description:
                "Mengelola laporan penjualan otomatis Anda dengan mudah berdasarkan data lokasi",
            },
            {
              name: "Perawatan mudah",
              description:
                "Dapatkan layanan restocking online dan after sales terbaik dari kami",
            },
            {
              name: "Kustomisasi",
              description:
                "Sesuaikan tampilan vending machine Anda dengan istimewa",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
