<template>
  <div class="container-group">
    <Banner></Banner>
    <h1>กลุ่มรายการสินค้า</h1>
    <div>
      <Group @onSelectGroup="onSelectGroup" />
    </div>
    <div class="delivery-icon" @click="onRedirect">
      <IconDelivery color="#ffffff"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-group {
  h1 {
    font-size: 24px;
    font-family: 'Kanit-Medium';
    color: var(--vt-c-secondary);

    @media only screen and (max-width: 1300px) {
      font-size: 20px;
    }
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
import Banner from "@/components/layouts/Banner.vue";
import ItemProduct from "@/components/layouts/ItemProduct.vue";
import Group from "@/components/layouts/Group.vue";
import IconDelivery from "@/components/icons/IconDelivery.vue";
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
    Group,
    IconDelivery
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
    },
    async onSelectGroup(data: any) {
      await this.$router.push({
        name: this.paths.productList.name,
        params: { filterId: data },
      })
    },
    onRedirect() {
      window.open("https://flashexpress.com/", "_blank");
    }
  },
});
</script>