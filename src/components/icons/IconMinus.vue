<template>
  <svg viewBox="0 0 16 4" class="hod-icon" :style="{ '--color-param': color, '--size-param': size }">
    <rect rx="2" />
  </svg>
</template>

<style lang="scss" scoped>
.hod-icon {
  width: var(--size-param);
  height: calc(var(--size-param) / 4);
}

.hod-icon rect {
  width: var(--size-param);
  height: calc(var(--size-param) / 4);
  fill: var(--color-param);
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconMinus',
  props: {
    color: {
      type: String,
      default: '#000000',
    },
    size: {
      type: String,
      default: '30px',
    },
  },
});
</script>
