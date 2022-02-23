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

  <h1>示例2 打开dialog</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
import { openDialog } from "../lib/openDialog";
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

    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好",
      });
    };
    return { x, toggle, f1, f2, showDialog };
  },
};
</script>
