<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>vue 3.0 ui</h1>
      <h2>自己学习玩的UI框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/TopNav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped></style>
