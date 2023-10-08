<template>
  <div class="container-menu">
    <div class="menu-list">
      <div @click="goto(path.groupList.name)">หน้าหลัก</div>
      <div @mouseover="isMenu = 'สินค้าของเรา'">
        สินค้าของเรา
        <IconArrowDown :size="iconSize" />
        <div class="menu-sub" v-if="isMenu === 'สินค้าของเรา'" @mouseleave="onExpand('สินค้าของเรา')">
          <span v-for="(item, index) in bannerList?.bannerList" :key="index">
            {{ item.bannerName }}
          </span>
        </div>
      </div>
      <div @click="goto(path.forRent.name)">ให้เช่า</div>
      <div @click="goto(path.branch.name)">สาขา</div>
      <div @click="gotoAbout('.container-about')">ติดต่อเรา</div>
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

      @media only screen and (max-width: 1900px) {
        margin-left: 32px;
        font-size: 14px;
      }

      @media only screen and (max-width: 1300px) {
        margin-left: 12px;
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
      box-shadow: 0px 10px 16px var(--vt-c-black-opa);

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
      iconSize: "16" as string
    };
  },
  components: {
    Search,
    IconArrowDown,
    RegisterModal,
  },
  created() {
    this.initData();
    this.onResolution();
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
    onResolution() {
      let resolution = window.innerWidth;
      if (resolution < 1900) {
        this.iconSize = "8";
      } else if (resolution < 1300) {
        this.iconSize = "4";
      }
    },
    gotoAbout(scroll: string) {
      const aboutSection = document.querySelector(scroll) as HTMLElement;
      if (aboutSection) {
        window.scrollTo({
          top: aboutSection.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  },
});
</script>
