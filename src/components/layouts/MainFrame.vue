<template>
  <div class="container-product">
    <div class="content">
      <FilterBar></FilterBar>
      <div class="list-item">
        <section>
          <FrameContent @loaded="handleLoaded" />
        </section>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container-product {
  display: flex;
  flex-direction: column;

  .content {
    width: 100%;
    display: grid;
    grid-template-columns: 16vw 1fr;


    .list-item {
      h1 {
        font-size: 32px;
        font-family: 'Kanit-Medium';
        color: var(--vt-c-secondary);

        @media only screen and (max-width: 1366px) {
          font-size: 24px;
        }

        @media only screen and (max-width: 1024px) {
          font-size: 18px;
        }
      }

      .container-item {
        display: grid;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
        grid-template-columns: auto auto auto auto auto;
        justify-items: center;

        @media only screen and (max-width: 1360px) {
          grid-template-columns: auto auto auto auto;
        }
      }
    }
  }
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import FilterBar from './FilterBar.vue';
import FrameContent from './FrameContent.vue';
export default defineComponent({
  name: 'MainFrame',
  emits: ['loaded'],
  components: {
    FilterBar,
    FrameContent
  },
  data() {
    return {
    };
  },
  methods: {
    handleLoaded() {
      this.$emit('loaded');
    },
  },
});
</script>
