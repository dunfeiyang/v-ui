<demo>
常规使用
</demo>
<template>
  <div>
    <Button>你好</Button>
    <Button type="link">你好</Button>
    <Button type="text">你好</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
