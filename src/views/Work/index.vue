<template>
  <div class="work-container">
    <div class="container-page">
      <h2 class="title-page">ร่วมงานกับเรา</h2>
    </div>
    <div class="content">
      <div class="work">
        <div class="container-cart">
          <slot name="content-left">
          </slot>
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

.work-container {
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
    justify-content: center;

    .work {
      width: 100%;
      display: flex;
      flex-direction: column;

      .container-cart {
        background-color: var(--vt-c-white);
        border-radius: 8px;
        box-shadow: 0px 10px 16px var(--vt-c-black-opa);
        padding: 20px 28px;
        min-height: 55vh;
      }
    }
  }


}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { path } from "@/common/path";
import { useGetPayment } from "./RentComposable";
export default defineComponent({
  name: "Work",
  data() {
    return {
      paths: path as any,
      dataList: [] as any
    };
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      let resp: any = await useGetPayment();
      this.dataList = resp
    },
    onBasket() {
      this.$router.push({ name: this.paths.basket.name })
    }
  },
});
</script>