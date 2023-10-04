<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="28.785" height="28.816" viewBox="0 0 28.785 28.816" class="shopping-icon"
        :style="{ '--color-param': color, '--size-param': size }">
        <g id="search-line" transform="translate(-4.44 -4)">
            <path id="Path_3" data-name="Path 3"
                d="M16.148,5.846A9.862,9.862,0,1,1,6.3,15.708a9.862,9.862,0,0,1,9.853-9.862m0-1.846A11.708,11.708,0,1,0,27.857,15.708,11.708,11.708,0,0,0,16.148,4Z"
                transform="translate(0 0)" fill="#5d6e3e" />
            <path id="Path_4" data-name="Path 4"
                d="M42.863,41.176l-6.638-6.683-1.279,1.27,6.638,6.683a.9.9,0,0,0,1.279-1.27Z"
                transform="translate(-9.9 -9.896)" fill="#5d6e3e" />
        </g>
    </svg>
</template>
  
<style lang="scss" scoped>
.shopping-icon {
    width: var(--size-param);
    height: var(--size-param);
}

.shopping-icon path {
    stroke: var(--color-param);
}
</style>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'IconSearch',
    props: {
        color: {
            type: String,
            default: 'none',
        },
        size: {
            type: String,
            default: '42px',
        },
    },
});
</script>
  