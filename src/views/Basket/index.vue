<template>
  <div class="container-basket">
    <FrameSummary titlePage="ตะกร้าของฉัน">
      <template v-slot:content-left>
        <div class="item-product" v-for="(item, index) in dataBasket?.productList" :key="index">
          <img :src="item.productImage" alt="">
          <div class="name">
            <p>{{ item.productName }}</p>
          </div>
          <div class="qty">
            <p> {{ formPrice(item.productQty, 0) }}</p> <span>{{ item.productUnitName }}</span>
          </div>
          <div class="price">
            <p>{{ formPrice(item.productPrice, 2) }}</p> <span>บาท</span>
          </div>
          <div class="remove">
            <IconRemove />
          </div>
        </div>
      </template>
      <template v-slot:content-right-summary>
        <div class="summary-product">
          <h1>สรุป</h1>
          <div class="item-form">
            <span class="p"> จำนวนสินค้า</span>
            <span class="span">{{ dataBasket.productAmount }}</span>
          </div>
          <div class="item-form">
            <span class="p">ราคารวม</span>
            <span class="span">{{ formPrice(dataBasket.totalPrice, 2) }}</span>
          </div>
          <div class="comfirm">
            <button @click="onCheckOut">ตกลง</button>
          </div>  
          <div class="shop-continue">
            <button @click="onShop">ซื้อสินค้าเพิ่มเติม</button>
          </div>         
        </div>
      </template>
    </FrameSummary>
  </div>
</template>

<style scoped lang="scss">
.container-basket {
  // display: flex;
  // margin: 0;
  // width: 100%;
  // min-height: calc(100vh - 169px);

  .item-product {
    width: 100%;
    margin: 0;
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 35% 1fr 1fr auto;
    padding: 16px 0;
    border-bottom: 1px solid var(--vt-c-black-opa);


    img {
      width: 140px;
      margin-left: 26px;
      height: 80px;
    }

    .name {
      font-size: 20px;
      font-family: "Kanit-Light";

      p {
        margin: 0;
      }

    }

    .qty {
      display: flex;
      flex-direction: row;
      align-content: center;
      gap: 6px;
      justify-content: flex-start;
      align-items: center;

      p {
        margin: 0;
        color: var(--vt-c-primary);
        font-size: 40px;
        font-family: "Kanit-Medium";
      }

      span {
        margin-top: 16px;
      }
    }

    .price {
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      gap: 6px;
      justify-content: flex-end;
      margin-right: 10px;

      p {
        margin: 0;
        color: var(--vt-c-primary);
        font-size: 40px;
        font-family: "Kanit-Medium";
      }

      span {
        margin-top: 16px;
      }
    }

    .remove {
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      margin-right: 26px;
      margin-left: 26px;
    }
  }

  .summary-product {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 40px;
      font-family: 'Kanit-Medium';
      margin: 0px;
    }

    .item-form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .p {
        font-size: 24px;
        margin-top: 12px;
        margin-left: 24px;
        font-family: 'Kanit-Medium';
        color: var(--vt-c-secondary);
      }

      .span {
        font-size: 24px;
        font-family: 'Kanit-Medium';
        color: var(--vt-c-primary);
        margin-right: 24px;
      }
    }

    .comfirm {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 32px;
      button {
        font-size: 24px;
        color: var(--vt-c-white);
        border-radius: 16px;
        width: 50%;
        padding: 8px 0px;
        border: none;
        background-color: var(--vt-c-secondary);
        cursor: pointer;
      }
      
    }
    .shop-continue{
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 24px;
      margin-bottom: 16px;

      button {
        background-color: unset;
        font-family: 'Kanit-Medium';
        border: none;
        font-size: 24px;
        color: var(--vt-c-secondary);
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { path } from "@/common/path";
import FrameSummary from "@/components/layouts/FrameSummary.vue";
import { useGetBasket } from "./BasketComposable";
import IconRemove from "@/components/icons/IconRemove.vue"
import { useFormatPrice } from "@/utils/functions";
export default defineComponent({
  name: "Basket",
  data() {
    return {
      paths: path as any,
      dataBasket: {} as any
    };
  },
  components: {
    FrameSummary,
    IconRemove
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      let resp: any = await useGetBasket();
      this.dataBasket = resp
    },
    formPrice(num: number, decimal: number) {
      return useFormatPrice(num, decimal);
    },
    onShop() {
      this.$router.push({ name: this.paths.groupList.name})
    },
    onCheckOut() {
      this.$router.push({ name: this.paths.checkOut.name})
    }
  },
});
</script>