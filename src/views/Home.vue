<template>
  <div class="layout">
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>vue 3.0 ui</h1>
        <h2>自己学习玩的UI框架</h2>
        <p class="actions">
          <a href="https://github.com/dunfeiyang" target="_blank">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
      <div class="features">
        <ul>
          <li>
            <svg>
              <use xlink:href="#icon-vue"></use>
            </svg>
            <h3>基于 Vue 3</h3>
            <p>骄傲地使用了 Vue 3 Composition API</p>
          </li>
          <li>
            <svg>
              <use xlink:href="#icon-ts"></use>
            </svg>
            <h3>基于 TypeScript</h3>
            <p>源代码采用 TypeScript 书写</p>
          </li>
          <li>
            <svg>
              <use xlink:href="#icon-light"></use>
            </svg>
            <h3>代码易读</h3>
            <p>每个组件的源代码都极其简洁</p>
          </li>
        </ul>
      </div>
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
$green: #1c1c1c;
$border-radius: 4px;
$color: #1c1c1c;
.layout {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d9d2c9;
}
.topnavAndBanner {
  width: 90vw;
  height: 90vh;
  background: #f6efe4;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
}
.features {
  margin: 10px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;

    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;

    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
.banner {
  color: $color;
  padding: 30px 0;
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
