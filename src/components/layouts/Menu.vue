<template>
  <div class="container-menu">
    <div class="menu-list">
      <div @click="goto(path.productList.name)">หน้าหลัก</div>
      <div @mouseover="isMenu = 'สินค้าของเรา'">
        สินค้าของเรา
        <IconArrowDown/>
        <div class="menu-sub" v-if="isMenu === 'สินค้าของเรา'" @mouseleave="onExpand('สินค้าของเรา')">
          <span v-for="(item, index) in bannerList?.bannerList" :key="index">
            {{ item.bannerName }}
          </span>
        </div>
      </div>
      <div @click="goto(path.productList.name)">ให้เช่า</div>
      <div @click="goto(path.productList.name)">สาขา</div>
      <div @click="goto(path.productList.name)">เกี่ยวกับเรา</div>
      <div @click="goto(path.productList.name)">ติดต่อเรา</div>
      <div @click="toggleModal">ลงทะเบียน</div>
    </div>
  </div>
  <RegisterModal :showModal="openModal" @close="toggleModal"> </RegisterModal>
</template>

<style scoped lang="scss">
.container-menu {
  display: flex;

  .menu-list {
    display: flex;

    div {
      margin-left: 28px;
      font-size: 20px;
      font-weight: 500;
      font-family: "Kanit-Medium";
      cursor: pointer;
      color: var(--vt-c-white);

      @media only screen and (max-width: 1366px) {
        margin-left: 32px;
        font-size: 14px;
      }
    }

    .menu-sub {
      min-width: 120px;
      position: absolute;
      display: flex;
      z-index: 1;
      flex-direction: column;
      color: var(--vt-c-black);
      padding: 16px 20px;
      border-radius: 8px;
      margin: 0px 0px !important;
      background-color: var(--vt-c-white);

      span {
        margin-bottom: 12px;

        &:hover {
          color: var(--vt-c-primary);
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "@/components/forms/Search.vue";
import IconArrowDown from "../icons/IconArrowDown.vue";
import { path } from "@/common/path";
import { useGetBannerList } from "@/components/layouts/LayoutComposable";
import RegisterModal from "@/components/modals/RegisterModal.vue";

export default defineComponent({
  name: "Menu",
  data() {
    return {
      activePage: "product-list" as any,
      path: path,
      bannerList: {} as any,
      isMenu: "" as string,
      openModal: false,
    };
  },
  components: {
    Search,
    IconArrowDown,
    RegisterModal,
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      this.bannerList = await useGetBannerList();
    },
    goto(name: string) {
      this.$router.push({ name });
    },
    onExpand(item: string) {
      if (this.isMenu === item) {
        this.isMenu = "";
      } else {
        this.isMenu = item;
      }
    },
    toggleModal: function () {
      this.openModal = !this.openModal;
    },
  },
});
</script>
