<template>
  <div>
    <Topnav />
    <div class="topnav">
      <div class="logo"></div>
      <div class="menu"></div>
    </div>

    <div class="content">
      <aside>边栏</aside>
      <main>内容</main>
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
