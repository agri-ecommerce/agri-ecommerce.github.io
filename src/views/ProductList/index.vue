<template>
  <div class="container-product">
    <div class="content">
      <div class="category">
        <h1 class="category-title">หมวดหมู่สินค้า</h1>
        <div class="menu-list" v-for="(item, index) in filters" :key="index">
          <p @click="onCategory(item)">
            {{ item.categoryGroupName }} <span>[{{ item.categoryGroupAmount }}]</span>
          </p>
            <div v-if="item.isActive === true " v-for="(subitem, subindex) in item?.categoryGroupItems" :key="subindex"
              @click="noFilter(subitem)" :class="{ active: activeFilter === subitem.categoryGroupItemId }">
              {{ subitem.categoryGroupItemName }} <span> [{{ subitem.categoryGroupItemAmount }}]</span>
            </div>
        </div>
      </div>
      <div class="list-item">
        <Banner></Banner>
        <h1>รายการสินค้า{{ filterName }}</h1>
        <div class="container-item">
          <div v-for="(item, index) in dataList?.productList" :key="index">
            <ItemProduct :data="item" />
          </div>
        </div>
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

    .category {
      // height: 20px;
      margin-top: 16px;

      .category-title {
        font-size: 32px;
        margin: 4px 0px 8px 0px;
        @media only screen and (max-width: 1366px) {
          font-size: 24px;
        }
      }

      .menu-list {
        display: flex;
        flex-direction: column;

        p {
          margin-left: 16px;
          font-size: 24px;
          margin-top: 8px;
          margin-bottom: 8px;
          font-family: 'Kanit-Medium';
          cursor: pointer;
          color: var(--vt-c-secondary);

          
          @media only screen and (max-width: 1400px) {
            font-size: 18px;
          }
        }

        span {
          font-size: 18px;
          font-family: 'Kanit-Regular';
        }

        div {
          margin-left: 32px;
          font-size: 16px;
          margin-top: 4px;
          font-family: 'Kanit-Regular';
          cursor: pointer;
          color: var(--vt-c-secondary);

          &.active {
            color: var(--vt-c-primary);
            font-family: 'Kanit-Medium';
            text-decoration: underline;
          }
        }
      }
    }

    .list-item {
      h1 {
        font-size: 32px;
        font-family: 'Kanit-Medium';
        color: var(--vt-c-secondary);

        @media only screen and (max-width: 1366px) {
          font-size: 24px;
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
import { defineComponent } from "vue";
import Banner from "@/components/layouts/Banner.vue";
import { filters } from '@/common/filters';
import ItemProduct from "@/components/layouts/ItemProduct.vue";
import { useGetMasterCategoryGroup } from "./ProductListComposable";
import mock from './mock.json'
export default defineComponent({
  name: "ProductList",
  data() {
    return {
      // filters: filters as any,
      filters: [] as any,
      activeFilter: 0 as number,
      filterName: '' as string,
      dataList: {} as any
    };
  },
  components: {
    Banner,
    ItemProduct
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      this.filters = await useGetMasterCategoryGroup();
      this.dataList = mock.data;
    },
    noFilter(filter: any) {
      this.activeFilter = filter.categoryGroupItemId;
      this.filterName = filter.categoryGroupName;
      // this.$router.push({ name });
    },
    onCategory(item: any) {
      item.isActive = !item.isActive;
    }
  },
});
</script>
