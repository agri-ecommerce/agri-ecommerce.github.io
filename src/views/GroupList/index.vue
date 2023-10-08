<template>
  <div class="container-group">
    <Banner></Banner>
    <h1>กลุ่มรายการสินค้า</h1>
    <div>
      <Group @onSelectGroup="onSelectGroup" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-group {
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
import Banner from "@/components/layouts/Banner.vue";
import ItemProduct from "@/components/layouts/ItemProduct.vue";
import Group from "@/components/layouts/Group.vue";
import { path } from "@/common/path";
export default defineComponent({
  name: "GroupList",
  data() {
    return {
      paths: path as any,
    };
  },
  components: {
    Banner,
    ItemProduct,
    Group
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
    },
    onSelectGroup(data: any) {
      // this.$router.push({ path: `${this.paths.productList.path}/${data.categoryGroupItemId}` });
      this.$router.push({
        name: this.paths.productList.name,
        params: { filterId: data },
      })
    }
  },
});
</script>