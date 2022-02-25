<demo>
支持 disabled
</demo>
<template>
  <Button disabled>禁用按钮</Button>
  <Button type="link" disabled>禁用链接按钮</Button>
  <Button type="text" disabled>禁用按钮</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
