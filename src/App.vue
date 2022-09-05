<template>
  <div>
     <div class="fixed-center" v-if="isLoad">
          <q-spinner-gears size="80px" color="primary" />
        </div>
        <div v-show="!isLoad">
      <router-view />
      </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default {
  name: 'App',
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
}
</script>
