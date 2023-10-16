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
    grid-template-columns: auto 35% auto 1fr auto;
    padding: 16px 0;
    border-bottom: 1px solid var(--vt-c-black-opa);


    img {
      width: var(--140px);
      margin-left: var(--20px);
      height: var(--80px);
      // @media only screen and (max-width: 1900px) {
      //   width: 100px;
      //   margin-left: var(--20px);
      //   height: 60px;
      // }
    }

    .name {
      font-size: var(--20px);
      font-family: "Kanit-Light";
      // @media only screen and (max-width: 1900px) {
      //   font-size: 16px;
      // }

      p {
        margin: 0;
      }

    }

    .qty {
      display: flex;
      flex-direction: row;
      align-content: center;
      gap: var(--6px);
      justify-content: flex-start;
      align-items: center;

      p {
        margin: 0;
        color: var(--vt-c-primary);
        font-size: var(--28px);
        font-family: "Kanit-Medium";
        margin-right: var(--4px);
      }

      span {
        margin-top: var(--14px);
      }
    }

    .price {
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      gap: var(--6px);
      justify-content: flex-end;
      margin-right: var(--10px);

      p {
        margin: 0;
        color: var(--vt-c-primary);
        font-size: var(--28px);
        font-family: "Kanit-Medium";
        margin-right: var(--8px);
      }

      span {
        margin-top: var(--16px);
      }
    }

    .remove {
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      justify-content: flex-end;
      margin-right: var(--8px);
      // margin-left: var(--20px);
    }
  }

  .summary-product {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: var(--32px);
      font-family: 'Kanit-Medium';
      margin: 0px;
      // @media only screen and (max-width: 1900px) {
      //   font-size: var(--32px);
      // }
    }

    .item-form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .p {
        font-size: var(-24px);
        margin-top: var(--12px);
        margin-left: var(--24px);
        font-family: 'Kanit-Medium';
        color: var(--vt-c-secondary);
        // @media only screen and (max-width: 1900px) {
        //   font-size: 22px;
        // }
      }

      .span {
        font-size: var(--24px);
        font-family: 'Kanit-Medium';
        color: var(--vt-c-primary);
        margin-right: var(--24px);
        // @media only screen and (max-width: 1900px) {
        //   font-size: 22px;
        // }
      }
    }

    .comfirm {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: var(--32px);
      button {
        font-size: var(--24px);
        color: var(--vt-c-white);
        border-radius: var(--16px);
        width: 50%;
        padding: var(--8px) 0px;
        border: none;
        background-color: var(--vt-c-secondary);
        cursor: pointer;
        // @media only screen and (max-width: 1900px) {
        //   font-size: 22px;
        // }
      }
      
    }
    .shop-continue{
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: var(--24px);
      margin-bottom: var(--16px);

      button {
        background-color: unset;
        font-family: 'Kanit-Medium';
        border: none;
        font-size: var(--24px);
        color: var(--vt-c-secondary);
        text-decoration: underline;
        cursor: pointer;
        // @media only screen and (max-width: 1900px) {
        //   font-size: 22px;
        // }
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