<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="18.362" height="11.302" viewBox="0 0 18.362 11.302" class="shopping-icon"
        :style="{ '--color-param': color, '--size-param': size }">
        <path id="Path_23" data-name="Path 23" d="M1225.4,48.2l7.06,7.06,7.059-7.06"
            transform="translate(-1223.276 -46.077)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3" />
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
    name: 'IconArrowDown',
    props: {
        color: {
            type: String,
            default: '#181818',
        },
        size: {
            type: String,
            default: '16px',
        },
    },
});
</script>
  