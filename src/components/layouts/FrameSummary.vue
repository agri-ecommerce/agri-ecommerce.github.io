<template>
  <div class="frame-summary-container">
    <div class="container-page">
      <h2 class="title-page">{{ titlePage }}</h2>
    </div>
    <div class="content">
      <div class="frame-summary-left">
        <div class="container-cart-left">
          <slot name="content-left"></slot>
        </div>
      </div>
      <div class="frame-summary-right">
          <div class="container-cart-summary">
            <slot name="content-right-summary"></slot>
        </div>

      </div>
    </div>


  </div>
</template>
<style scoped lang="scss">
h1,
p {
  margin: 0;
  font-weight: unset;
}

.frame-summary-container {
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  flex-direction: column;

  .container-page {
    display: flex;
    align-items: center;

    .title-page {
      font-family: 'Kanit-Medium';
      font-size: 34px;
      color: var(--vt-c-secondary);
    }
  }

  .content {
    display: flex;
    gap: 20px;

    .frame-summary-left {
      width: 68%;
      display: flex;
      flex-direction: column;

      .container-cart-left {
        background-color: var(--vt-c-white);
        border-radius: 8px;
        box-shadow: 0px 10px 16px var(--vt-c-black-opa);
        padding: 20px 28px;
        min-height: 55vh;
      }
    }

    .frame-summary-right {
      width: 32%;

      ::-webkit-scrollbar {
        display: none;
      }

      .container-cart-summary {
        display: flex;
        flex-direction: column;
        background-color: var(--vt-c-white);
        border-radius: 8px;
        box-shadow: 0px 10px 16px var(--vt-c-black-opa);
        padding: 20px;
        min-height: 30vh;
      }
    }
  }


}
</style>

<script lang="ts">
import { defineComponent, nextTick } from 'vue';

export default defineComponent({
  name: 'FrameSummary',
  emits: ['loaded'],
  props: {
    titlePage: {
      type: String,
      default: 'product',
    },
  },
  components: {
  },
  data() {
    return {
    };
  },
  async mounted() {
    await nextTick();
    this.$emit('loaded');
  },
});
</script>
