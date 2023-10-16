<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="shopping-icon" width="54.908" height="43.146" viewBox="0 0 54.908 43.146"
    :style="{ '--color-param': color, '--size-param': size }">
    <g id="delivery" transform="translate(-3 -9)">
      <path id="Path_25" data-name="Path 25" d="M6,24H29.532v3.922H6Z" transform="translate(0.922 4.61)" />
      <path id="Path_26" data-name="Path 26" d="M3,16.5H22.61v3.922H3Z" transform="translate(0 2.305)" />
      <path id="Path_27" data-name="Path 27"
        d="M56.373,29.8,50.49,16.071a1.959,1.959,0,0,0-1.8-1.188H42.805V10.961A1.961,1.961,0,0,0,40.844,9H9.468v3.922H38.883V37.544a7.828,7.828,0,0,0-3.644,4.793H22.917a7.844,7.844,0,1,0,0,3.922H35.239a7.8,7.8,0,0,0,15.131,0h4.2A1.961,1.961,0,0,0,56.532,44.3V30.571a1.955,1.955,0,0,0-.159-.773ZM15.351,48.22A3.922,3.922,0,1,1,19.273,44.3a3.922,3.922,0,0,1-3.922,3.922ZM42.805,18.805h4.589l4.2,9.805H42.805Zm0,29.415A3.922,3.922,0,1,1,46.727,44.3a3.922,3.922,0,0,1-3.922,3.922Zm9.805-5.883H50.371a7.834,7.834,0,0,0-7.566-5.883V32.532H52.61Z"
        transform="translate(1.376 0)" />
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
  name: 'IconDelivery',
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
