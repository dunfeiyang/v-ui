<template>
  <div class="ui-tabs">
    <div class="ui-tabs-nav" ref="container">
      <div
        class="ui-tabs-nav-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :key="index"
        @click="select(t)"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
      >
        {{ t }}
      </div>

      <div class="ui-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="ui-tabs-content">
      <component
        class="ui-tabs-content-item"
        :key="selected"
        :is="current"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: String,
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    const setStyle = () => {
      const { width, left: left2 } = selectedItem.value.getBoundingClientRect();
      const { left: left1 } = container.value.getBoundingClientRect();
      const left = left2 - left1;

      indicator.value.style.width = width + "px";
      indicator.value.style.left = left + "px";
    };
    onMounted(() => {
      watchEffect(setStyle);
    });

    const defaults = context.slots.default();

    const checkChild = defaults.some((tag) => tag.type !== Tab);
    if (checkChild) {
      throw new Error("Tabs 子组件必须是 Tab");
    }

    const titles = defaults.map((tag) => tag.props.title);

    const current = computed(() =>
      defaults.find((tag) => tag.props.title === props.selected)
    );

    const select = (title: string) => {
      context.emit("update:selected", title);
    };

    return {
      defaults,
      titles,
      current,
      select,
      selectedItem,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.ui-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
