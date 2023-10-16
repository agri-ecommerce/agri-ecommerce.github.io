<template>
  <div class="container-menu">
    <div class="menu-list" @mouseleave="onExpand('')">
      <div @click="goto(paths.groupList.name)">หน้าหลัก</div>
      <div @mouseover="isMenu = 'สินค้าของเรา'">
        สินค้าของเรา
        <IconArrowDown :size="iconSize" color="#ffffff" />
        <div class="menu-sub" v-if="isMenu === 'สินค้าของเรา'" @mouseleave="onExpand('สินค้าของเรา')">
          <span v-for="(item, index) in bannerList?.bannerList" :key="index" @click="onSelectGroup(item.bannerId)">
            {{ item.bannerName }}
          </span>
        </div>
      </div>
      <div @click="goto(paths.forRent.name)">ให้เช่า</div>
      <div @click="goto(paths.branch.name)">สาขา</div>
      <div @click="gotoAbout('.container-about')">ติดต่อเรา</div>
      <div @click="goto(paths.work.name)">ร่วมงานกับเรา</div>
      <IconBasket class="basket-icon" @click="onBasket" color="#ffffff"/>
      <!-- <div @click="toggleModal">ลงทะเบียน</div> -->
    </div>
  </div>
  <!-- <RegisterModal :showModal="openModal" @close="toggleModal"> </RegisterModal> -->
</template>

<style scoped lang="scss">
.container-menu {
  display: flex;
  width: 100%;

  .menu-list {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr auto;

    div {
      text-align: center;
      font-size: var(--18px);
      font-weight: 500;
      font-family: "Kanit-Medium";
      cursor: pointer;
      color: var(--vt-c-white);

      // @media only screen and (max-width: 1300px) {
      //   text-align: center;
      //   font-size: 16px;
      // }
    }

    .menu-sub {
      min-width: var(--120px);
      position: absolute;
      display: flex;
      // top: 0;
      z-index: 1;
      flex-direction: column;
      color: var(--vt-c-black);
      padding: var(--16px) var(--18px);
      border-radius: var(--8px);
      margin: 0px var(--10px) !important;
      background-color: var(--vt-c-white);
      box-shadow: 0px var(--10px) var(--18px) var(--vt-c-black-opa);
      align-items: flex-start;

      span {
        margin-bottom: var(--12px);

        &:hover {
          color: var(--vt-c-primary);
        }
      }
    }

    .basket-icon {
      cursor: pointer;
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
import IconBasket from '../icons/IconBasket.vue';
import { useGotoClass } from "@/utils/functions";
export default defineComponent({
  name: "Menu",
  data() {
    return {
      activePage: "product-list" as any,
      paths: path,
      bannerList: {} as any,
      isMenu: "" as string,
      openModal: false,
      iconSize: "16" as string
    };
  },
  components: {
    Search,
    IconArrowDown,
    IconBasket
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
    async gotoAbout(scroll: string) {
      useGotoClass(scroll);
    },
    onSelectGroup(data: any) {
      this.$router.push({
        name: this.paths.productList.name,
        params: { filterId: data },
      })
    },
    onBasket() {
      this.$router.push({
        name: this.paths.basket.name,
      })
    }
  },
});
</script>
