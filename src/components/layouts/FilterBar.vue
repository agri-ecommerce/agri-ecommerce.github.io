<template>
  <div class="filter-bar">
    <h1 class="category-title">หมวดหมู่สินค้า</h1>
    <div class="menu-list" v-for="(item, index) in filters" :key="index">
      <p @click="onCategory(item)">
        {{ item.categoryGroupName }} <span>[{{ item.categoryGroupAmount }}]</span>
      </p>
      <div v-if="item.isActive === true" v-for="(subitem, subindex) in item?.categoryGroupItems" :key="subindex"
        @click="onFilter(subitem)" :class="{ active: isFilter === subitem.categoryGroupItemId }">
        {{ subitem.categoryGroupItemName }} <span> [{{ subitem.categoryGroupItemAmount }}]</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter-bar {
  // height: 20px;
  margin-top: 16px;

  .category-title {
    font-size: 32px;
    margin: 4px 0px 8px 0px;

    @media only screen and (max-width: 1900px) {
      font-size: 24px;
    }

    @media only screen and (max-width: 1024px) {
      font-size: 18px;
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


      @media only screen and (max-width: 1900px) {
        font-size: 18px;
      }

      @media only screen and (max-width: 1024px) {
        font-size: 14px;
      }
    }

    span {
      font-size: 18px;
      font-family: 'Kanit-Regular';

      @media only screen and (max-width: 1400px) {
        font-size: 14px;
      }
    }

    div {
      margin-left: 32px;
      font-size: 16px;
      margin-top: 4px;
      font-family: 'Kanit-Regular';
      cursor: pointer;
      color: var(--vt-c-secondary);

      @media only screen and (max-width: 1400px) {
        margin-top: 6px;
        font-size: 14px;
      }

      &.active {
        color: var(--vt-c-primary);
        font-family: 'Kanit-Medium';
        text-decoration: underline;
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, nextTick } from 'vue';
import { useGetMasterCategoryGroup } from "@/components/layouts/LayoutComposable";
import { path } from "@/common/path";
import { mapState } from 'vuex';
export default defineComponent({
  name: 'FilterBar',
  data() {
    return {
      filters: [] as any,
      paths: path as any,
    };
  },
  async mounted() {
    await nextTick();
    this.initData();
    this.$emit('loaded');
  },
  computed:{
    ...mapState('shop', {
      isFilter: (state: any) => {
        return state.isFilter
      }
    }),
  },
  methods: {
    async initData() {
      this.filters = await useGetMasterCategoryGroup();
    },
    async onFilter(item: any) {
      await this.$store.dispatch('shop/setFilter', item.categoryGroupItemId);
      this.$router.push({
        name: this.paths.productList.name,
        params: { filterId: item.categoryGroupItemId },
      })
    },
    onCategory(item: any) {
      item.isActive = !item.isActive;
    },
  },
});
</script>
