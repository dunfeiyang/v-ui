<demo>
支持 level
</demo>
<template>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button type="link" level="main">主要链接按钮</Button>
      <Button type="link">普通链接按钮</Button>
      <Button type="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button type="text" level="main">主要文字按钮</Button>
      <Button type="text">普通文字按钮</Button>
      <Button type="text" level="danger">危险文字按钮</Button>
    </div>
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
