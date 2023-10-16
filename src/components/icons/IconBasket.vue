<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="shopping-icon" width="45" height="42" viewBox="0 0 45 42"
    :style="{ '--color-param': color, '--size-param': size }">
    <g id="cart4" transform="translate(0 -6)">
      <g id="Group_28" data-name="Group 28">
        <path id="Path_5" data-name="Path 5"
          d="M0,7.5A1.5,1.5,0,0,1,1.5,6H6A1.5,1.5,0,0,1,7.455,7.137L8.67,12H43.5a1.5,1.5,0,0,1,1.455,1.863l-4.5,18A1.5,1.5,0,0,1,39,33H12a1.5,1.5,0,0,1-1.455-1.137L4.83,9H1.5A1.5,1.5,0,0,1,0,7.5ZM9.42,15l1.5,6H15V15ZM18,15v6h6V15Zm9,0v6h6V15Zm9,0v6h4.08l1.5-6Zm3.33,9H36v6h1.83ZM33,24H27v6h6Zm-9,0H18v6h6Zm-9,0H11.67l1.5,6H15Zm0,15a3,3,0,1,0,3,3A3,3,0,0,0,15,39ZM9,42a6,6,0,1,1,6,6A6,6,0,0,1,9,42Zm27-3a3,3,0,1,0,3,3A3,3,0,0,0,36,39Zm-6,3a6,6,0,1,1,6,6A6,6,0,0,1,30,42Z"
          fill="#fff" />
      </g>
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
  name: 'IconBasket',
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
