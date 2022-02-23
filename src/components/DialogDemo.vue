<template>
  <div>示例1</div>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :ok="f1" :cancel="f2">
    <template #title>
      <strong>标题1</strong>
    </template>
    <template #content>
      <div>你好</div>
      <div>不好</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";

export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    return { x, toggle, f1, f2 };
  },
};
</script>
