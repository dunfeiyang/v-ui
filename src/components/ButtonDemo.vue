<template>
  <h1>示例1 - type</h1>
  <Button>你好</Button>
  <Button type="button">button</Button>
  <Button type="link">link</Button>
  <Button type="text">text</Button>

  <h1>示例2 - size</h1>
  <div>
    <Button size="big">big</Button>
    <Button size="normal">normal</Button>
    <Button size="small">small</Button>
  </div>
  <div>
    <Button type="link" size="big">big</Button>
    <Button type="link" size="normal">normal</Button>
    <Button type="link" size="small">small</Button>
  </div>
  <div>
    <Button type="text" size="big">big</Button>
    <Button type="text" size="normal">normal</Button>
    <Button type="text" size="small">small</Button>
  </div>

  <h1>示例3 - level</h1>
  <div>
    <Button>普通</Button>
    <Button level="main">main</Button>
    <Button level="danger">danger</Button>
  </div>
  <div>
    <Button type="link">普通</Button>
    <Button type="link" level="main">main</Button>
    <Button type="link" level="danger">danger</Button>
  </div>
  <div>
    <Button type="text">普通</Button>
    <Button type="text" level="main">main</Button>
    <Button type="text" level="danger">danger</Button>
  </div>

  <h1>示例4 - disabled</h1>
  <div>
    <Button disabled>确认</Button>
    <Button :disabled="true">确认</Button>
  </div>

  <h1>示例5 - loading</h1>
  <Button loading>loading</Button>
  <Button :loading="true">loading</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log("hi");
    };

    return { onClick };
  },
};
</script>
