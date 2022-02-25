<template>
  <div>
    <h1>Switch1 组件示例</h1>

    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
    <hr />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Button from "../lib/Button.vue";
import Demo from "./Demo.vue";
import "prismjs";
import "prismjs/themes/prism.css";
const Prism = (window as any).Prism;
export default {
  components: {
    Switch1Demo,
    Switch2Demo,
    Button,
    Demo,
  },
  setup() {
    const checked = ref(true);
    return { checked, Switch1Demo, Switch2Demo, Prism };
  },
};
</script>
