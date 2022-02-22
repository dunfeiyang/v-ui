<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>vue 3.0 ui</h1>
      <h2>自己学习玩的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/dunfeiyang">GitHub</a>
        <router-link to="/doc">开始</router-link>
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

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
