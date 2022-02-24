<template>
  <h1>Tabs 示例1</h1>

  <Tabs v-model:selected="selected">
    <Tab name="0" title="导航1">内容1</Tab>
    <Tab name="1" title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import { ref } from "vue";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";

export default {
  components: {
    Tab,
    Tabs,
  },
  setup() {
    const selected = ref("导航1");
    return {
      selected,
    };
  },
};
</script>
