<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { provide, ref } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const isMobile = width <= 500;
    const menuVisible = ref(isMobile ? false : true);
    provide("menuVisible", menuVisible);
    router.afterEach(() => {
      if (isMobile) {
        menuVisible.value = false;
      }
    });
  },
};
</script>
