<template>
  <div>
    <div style="height: 100px; overflow: hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M-15.01,118.91 C220.88,-101.15 228.21,213.65 520.54,-3.45 L501.92,153.45 L-3.15,154.44 Z"
          style="stroke: none; fill: #f8f8fa"
        ></path>
      </svg>
    </div>

    <!-- Mobile -->
    <div
      class="column !flex sm:!hidden"
      style="background-color: #f8f8fa; z-index: 999"
    >
      <div
        class="row justify-center text-lg mt-2 text-center"
        style="color: #141313; font-weight: 600"
      >
        Mengapa Harus Pilih Mac
      </div>
      <div
        class="row justify-center text-lg text-center"
        style="color: #104e81; font-weight: 600"
      >
        <div>Vending Machine&nbsp;</div>
        <div style="color: #141313">Kami?</div>
      </div>
      <div
        class="row justify-center text-sm mt-2 text-center"
        style="color: #576170; font-weight: 500"
      >
        Karena kami percaya dalam <br />
        memberikan kualitas tidak hanya sekali, <br />
        namun berulang kali
      </div>
      <div class="column mt-2 q-gutter-y-sm text-xs">
        <div class="row justify-center">
          <div
            class="text-center rounded-full q-px-md q-py-xs"
            style="color: #141313; font-weight: 500; border: solid 1px #576170"
          >
            Kepuasan pelanggan menjadi prioritas kami
          </div>
        </div>
        <div class="row justify-center">
          <div
            class="text-center rounded-full q-px-md q-py-xs"
            style="color: #141313; font-weight: 500; border: solid 1px #576170"
          >
            Kecepatan layanan yang kompeten
          </div>
        </div>
        <div class="row justify-center">
          <div
            class="text-center rounded-full q-px-md q-py-xs"
            style="color: #141313; font-weight: 500; border: solid 1px #576170"
          >
            Layanan konsultasi gratis setiap solusi bisnis retail Anda
          </div>
        </div>
        <div class="row justify-center">
          <div
            class="text-center rounded-full q-px-md q-py-xs"
            style="color: #141313; font-weight: 500; border: solid 1px #576170"
          >
            Harga kompetitif bersaing
          </div>
        </div>
      </div>
      <div class="row justify-center mt-5">
        <img
          no-spinner
          src="~/assets/images/benefit_img.png"
          style="width: 60%"
        />
      </div>
      <div class="w-full">
        <q-img no-spinner src="~/assets/images/graphic-offer_img.png">
          <div class="w-full h-full column bg-transparent" style="padding: 0px">
            <div class="col-3"></div>
            <div class="col column">
              <div
                class="row justify-center text-lg text-center"
                style="color: #ffffff; font-weight: 600"
              >
                Penawaran Spesial dari Kami
              </div>
              <div class="mt-5">
                <div
                  class="row q-px-md mt-1"
                  v-for="item in benefit_lists"
                  :key="item"
                >
                  <div class="col-6">
                    <div class="row" v-if="item.left != ''">
                      <div>
                        <img
                          no-spinner
                          src="~/assets/icons/arrow_right_icon.svg"
                          style="width: 70%"
                        />
                      </div>
                      <div
                        class="text-xs self-center col"
                        style="color: #ffffff; font-weight: 400"
                      >
                        {{ item.left }}
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="row" v-if="item.right != ''">
                      <div>
                        <img
                          no-spinner
                          src="~/assets/icons/arrow_right_icon.svg"
                          style="width: 70%"
                        />
                      </div>
                      <div
                        class="text-xs self-center col"
                        style="color: #ffffff; font-weight: 400"
                      >
                        {{ item.right }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-img>
      </div>
    </div>
    <div class="!flex sm:!hidden row mt-[-120px]">
      <q-img
        no-spinner
        src="~/assets/images/benefit_img_2.png"
        style="width: 55%; z-index: 1"
      />
    </div>

    <!-- Dekstop -->
    <div class="row !hidden sm:!flex" style="background-color: #f8f8fa">
      <div class="col-5 row justify-center self-center">
        <q-img
          class="w-full h-[400px] md:h-[450px] lg:h-[500px] xl:h-full"
          no-spinner
          src="~/assets/images/benefit_img.png"
          style="background-repeat: no-repeat; background-size: cover"
        />
      </div>
      <div class="col column pt-14">
        <div class="text-2xl mt-2" style="color: #141313; font-weight: 600">
          Mengapa Harus Pilih Mac
        </div>
        <div class="text-2xl row" style="color: #104e81; font-weight: 600">
          <div>Vending Machine&nbsp;</div>
          <div style="color: #141313">Kami?</div>
        </div>
        <div class="text-lg mt-2" style="color: #576170; font-weight: 500">
          Karena kami percaya dalam <br />
          memberikan kualitas tidak hanya sekali, <br />
          namun berulang kali
        </div>
        <div class="column mt-2 q-gutter-y-md text-lg">
          <div class="row">
            <div
              class="rounded-full q-px-lg q-py-sm"
              style="
                color: #141313;
                font-weight: 500;
                border: solid 1px #576170;
              "
            >
              Kepuasan pelanggan menjadi prioritas kami
            </div>
          </div>
          <div class="row">
            <div
              class="rounded-full q-px-lg q-py-sm"
              style="
                color: #141313;
                font-weight: 500;
                border: solid 1px #576170;
              "
            >
              Kecepatan layanan yang kompeten
            </div>
          </div>
          <div class="row">
            <div
              class="rounded-full q-px-lg q-py-sm"
              style="
                color: #141313;
                font-weight: 500;
                border: solid 1px #576170;
              "
            >
              Layanan konsultasi gratis setiap solusi bisnis retail Anda
            </div>
          </div>
          <div class="row">
            <div
              class="rounded-full q-px-lg q-py-sm"
              style="
                color: #141313;
                font-weight: 500;
                border: solid 1px #576170;
              "
            >
              Harga kompetitif bersaing
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <q-img
          no-spinner
          src="~/assets/images/benefit_dekstop_img.png"
          style="height: 500px"
        >
          <div class="w-full h-full column bg-transparent" style="padding: 0px">
            <div class="col-4">
              <div class="row w-full" style="height: 180px; overflow: hidden">
                <svg
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  style="height: 100%; width: 100%"
                >
                  <path
                    d="M0.00,49.99 C150.00,150.00 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"
                    style="stroke: none; fill: #f8f8fa"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="col column">
              <div
                class="row justify-center text-2xl text-center"
                style="color: #ffffff; font-weight: 600"
              >
                Penawaran Spesial dari Kami
              </div>
              <div class="mt-7">
                <div
                  class="row q-px-md mt-3 justify-center q-gutter-x-lg"
                  v-for="item in benefit_lists"
                  :key="item"
                >
                  <div class="col-sm-5 col-md-3">
                    <div class="row justify-end" v-if="item.left != ''">
                      <div>
                        <img
                          no-spinner
                          src="~/assets/icons/arrow_right_icon.svg"
                          style="width: 70%"
                        />
                      </div>
                      <div
                        class="text-base self-center col"
                        style="color: #ffffff; font-weight: 400"
                      >
                        {{ item.left }}
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-5 col-md-3">
                    <div class="row" v-if="item.right != ''">
                      <div>
                        <img
                          no-spinner
                          src="~/assets/icons/arrow_right_icon.svg"
                          style="width: 70%"
                        />
                      </div>
                      <div
                        class="text-base self-center col"
                        style="color: #ffffff; font-weight: 400"
                      >
                        {{ item.right }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-img>
      </div>
    </div>
    <div
      class="!hidden sm:!flex row justify-end md:pr-16 mt-[-60px] lg:mt-[-120px] xl:mt-[-200px] xl-pr-20"
    >
      <q-img
        no-spinner
        src="~/assets/images/benefit_img_2.png"
        style="width: 20%"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      benefit_lists: [
        {
          left: "Harga yang kompetitif",
          right: "Kualitas terbaik",
        },
        {
          left: "Fleksibilitas fitur",
          right: "24 jam service center",
        },
        {
          left: "Kustomisasi sesuai kebutuhan bisnis Anda",
          right: "Teknologi terbaru",
        },
        {
          left: "Siap berkolaborasi untuk meningkatkan bisnis Anda",
          right: "Service poin yang terbesar di 20 kota besar di Indonesia",
        },
        {
          left: "",
          right: "Garansi layanan terbaik",
        },
      ],
    };
  },
};
</script>

<style></style>
