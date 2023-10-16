<template>
  <div class="filter-bar">
    <h1 class="category-title">หมวดหมู่สินค้า</h1>
    <div class="menu-list" v-for="(filter, index) in filters" :key="index">
      <p class="filter-p" @click="onCategory(filter)">{{ filter.categoryGroupName }}<span>[{{ filter.categoryGroupAmount
      }}]</span><IconArrowDown class="icon-arrow"/></p>
      <div v-if="filter.isActive === true" v-for="(item, subindex) in filter?.categoryGroupItems" :key="subindex">
        <div  class="filter-sub-item"  v-if="item?.groupSubItems?.length">
          <p @click="onCategory(item)">{{ item.categoryGroupItemName }} <span> [{{ item.categoryGroupItemAmount }}]</span><IconArrowDown class="icon-arrow"/></p>
          <div v-if="item?.isActive === true" v-for="(subitem, subindex) in item?.groupSubItems">
            <div v-if="subitem?.groupSubSubItems?.length">
              <p class="sub-item" @click="onCategory(subitem)">{{ subitem?.categoryGroupSubItemName }} <span> [{{
                subitem?.categoryGroupSubItemAmount }}]</span><IconArrowDown class="icon-arrow"/></p>
              <div class="sub-sub-item" v-if="subitem?.isActive === true" v-for="(subsubitem, subsubindex) in subitem?.groupSubSubItems"
                @click="onFilter(subsubitem.categoryGroupSubSubItemId)"
                :class="{ active: isFilter === subsubitem.categoryGroupSubSubItemId }">
                <p>{{ subsubitem?.categoryGroupSubSubItemName }} <span> [{{ subsubitem?.categoryGroupSubSubItemAmount
                }}]</span></p>
              </div>
            </div>
            <div class="sub-item" v-else @click="onFilter(subitem.categoryGroupSubItemId)"
              :class="{ active: isFilter === subitem.categoryGroupSubItemId }">
              <p>{{ subitem?.categoryGroupSubItemName }} <span> [{{ subitem?.categoryGroupSubItemAmount }}]</span></p>
            </div>
          </div>
        </div>
        <div class="filter-item" v-else @click="onFilter(item.categoryGroupItemId)"
          :class="{ active: isFilter === item.categoryGroupItemId }">
          <p>{{ item?.categoryGroupItemName }} <span> [{{ item?.categoryGroupItemAmount }}]</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter-bar {
  // height: 20px;
  margin-top: 16px;

  .category-title {
    font-size: 24px;
    margin: 4px 0px 8px 0px;

    @media only screen and (max-width: 1024px) {
      font-size: 18px;
    }
  }

  .menu-list {
    display: flex;
    flex-direction: column;

    .icon-arrow {
      margin-left: 6px;
    }

    .filter-p {
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

    .filter-item {
      margin-left: 32px;
      font-size: 16px;
      margin-top: 4px;
      font-family: 'Kanit-Regular';
      cursor: pointer;
      color: var(--vt-c-secondary);

      p {
        margin: 4px;
      }

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

    .filter-sub-item {
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

      p {
        margin: 4px;
      }

      .sub-item {
        margin-left: 32px;
        &.active {
        color: var(--vt-c-primary);
        font-family: 'Kanit-Medium';
        text-decoration: underline;
      }

      }

      .sub-sub-item {
        margin-left: 64px;
        &.active {
        color: var(--vt-c-primary);
        font-family: 'Kanit-Medium';
        text-decoration: underline;
      }

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
import IconArrowDown from '../icons/IconArrowDown.vue';
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
  components:{
    IconArrowDown
  },
  computed: {
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
      await this.$store.dispatch('shop/setFilter', item);
      this.$router.push({
        name: this.paths.productList.name,
        params: { filterId: item },
      })
    },
    onCategory(item: any) {
      item.isActive = !item.isActive;
    },
  },
});
</script>
