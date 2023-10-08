<template>
  <section class="frame-content">
    <router-view />
  </section>
</template>

<style scoped lang="scss">
.frame-content {
  width: 100%;
  height: 100%;
}
</style>

<script lang="ts">
import { defineComponent, nextTick } from 'vue';

export default defineComponent({
  name: 'FrameContent',
  data() {
    return {
      isInClient: false,
    };
  },
  async mounted() {
    await nextTick();
    this.$emit('loaded');
  },
});
</script>
