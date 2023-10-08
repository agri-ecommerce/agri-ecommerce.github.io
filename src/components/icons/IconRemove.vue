<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="shopping-icon"  width="42" height="42" viewBox="0 0 42 42" :style="{ '--color-param': color, '--size-param': size }">
  <g id="close-outline" transform="translate(-3 -3)">
    <path id="Path_6" data-name="Path 6" d="M24,3A20.871,20.871,0,0,0,3,24,20.871,20.871,0,0,0,24,45,20.871,20.871,0,0,0,45,24,20.871,20.871,0,0,0,24,3Zm0,39A18,18,0,1,1,42,24,18.053,18.053,0,0,1,24,42Z" fill="#5d6e3e"/>
    <path id="Path_7" data-name="Path 7" d="M32.1,34.5,24,26.4l-8.1,8.1-2.4-2.4L21.6,24l-8.1-8.1,2.4-2.4L24,21.6l8.1-8.1,2.4,2.4L26.4,24l8.1,8.1Z" fill="#5d6e3e"/>
  </g>
</svg>

</template>

<style lang="scss" scoped>
.shopping-icon {
  width: var(--size-param);
  height: var(--size-param);
}

.shopping-icon g path {
  fill: var(--color-param);
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconRemove',
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
