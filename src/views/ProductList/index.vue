<template>
  <div class="container-product">
    <h1>รายการสินค้า</h1>
    <div class="container-item">
      <div v-for="(item, index) in dataList?.productList" :key="index">
        <ItemProduct :data="item" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-product {
  h1 {
    font-size: 32px;
    font-family: 'Kanit-Medium';
    color: var(--vt-c-secondary);

    @media only screen and (max-width: 1900px) {
      font-size: 24px;
    }

    @media only screen and (max-width: 1300px) {
      font-size: 20px;
    }
  }

  .container-item {
    display: grid;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    grid-template-columns: auto auto auto auto auto;
    justify-items: center;

    @media only screen and (max-width: 1900px) {
      grid-template-columns: auto auto auto auto;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import ItemProduct from "@/components/layouts/ItemProduct.vue";
import mock from './mock.json'
export default defineComponent({
  name: "ProductList",
  data() {
    return {
      dataList: {} as any,
    };
  },
  components: {
    ItemProduct,
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
  watch: {
    async filterId() {
      if(!this.filterId) {
        await this.$store.dispatch('shop/setFilter', 0);
      }
      await this.$store.dispatch('shop/setFilter', this.filterId);
    }
  },
  methods: {
    async initData() {
      this.dataList = mock.data;
    },
  },
});
</script>
