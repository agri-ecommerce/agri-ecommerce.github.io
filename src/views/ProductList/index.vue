<template>
  <div class="container-product">
    <h1>รายการสินค้า</h1>
    <div class="container-item">
      <div v-for="(item, index) in dataList?.productList" :key="index">
        <ItemProduct :data="item" />
      </div>
    </div>
    <div class="delivery-icon" @click="onRedirect">
      <IconDelivery color="#ffffff"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-product {
  h1 {
    font-size: 24px;
    font-family: 'Kanit-Medium';
    color: var(--vt-c-secondary);

    @media only screen and (max-width: 1300px) {
      font-size: 20px;
    }
  }

  .container-item {
    display: grid;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    grid-template-columns: auto auto auto auto;
    justify-items: center;
  }

  .delivery-icon {
    display: flex;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
    background-color: var(--vt-c-primary);
    position: fixed;
    bottom: 30px;
    right: 30px;
    box-shadow: 0px 10px 20px var(--vt-c-black-opa);
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media only screen and (max-width: 1600px) {
      right: 10px;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import ItemProduct from "@/components/layouts/ItemProduct.vue";
import mock from './mock.json'
import IconDelivery from "@/components/icons/IconDelivery.vue";
export default defineComponent({
  name: "ProductList",
  data() {
    return {
      dataList: {} as any,
    };
  },
  components: {
    ItemProduct,
    IconDelivery
  },
  created() {
    this.initData();
  },
  computed: {
    filterId() {
      let filter: any = this.$route?.params?.filterId?.toString()
      return parseInt(filter);
    },
  },
  methods: {
    async initData() {
      this.dataList = mock.data;
    },  
    onRedirect() {
      window.open("https://flashexpress.com/", "_blank");
    } 
  },
});
</script>
