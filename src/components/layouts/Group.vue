<template>
  <div class="container-group">
    <div class="container-item-group" v-for="(item, index) in groupList" :key="index">
      <div class="container-subitem-group" @click="onSelectGroup(item.productGroupId)">
        <div class="icon-img">
          <img :src="`data:image/png;base64,${item.productGroupImage}`" alt="" />
        </div>
        <span>{{ item.productGroupName }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-group {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  .container-item-group {
    gap: 12px;

    .container-subitem-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 28px;

      .icon-img {
        display: flex;
        position: relative;
        width: 80px;
        height: 80px;
        overflow: hidden;

        @media only screen and (max-width: 1300px) {
          width: 50px;
          height: 50px;
        }

        border-radius: 50%;
        padding: 10px;
        align-content: center;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: var(--vt-c-primary);
        }

        img {
          width: 50px;
          height: 50px;
          margin-bottom: 12px;

          @media only screen and (max-width: 1300px) {
            width: 30px;
            height: 30px;
          }

        }
      }

      span {
        color: var(--vt-c-secondary);
        font-size: 18px;
        text-align: center;
        font-family: 'Kanit-Medium';
        width: 120px;

        @media only screen and (max-width: 1300px) {
          font-size: 16px;
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { useGetMasterGroup } from "./LayoutComposable";

export default defineComponent({
  name: "Group",
  data() {
    return {
      groupList: [] as any,
    };
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      let resp: any = await useGetMasterGroup();
      this.groupList = resp;
    },
    onSelectGroup(item: any) {
      this.$emit("onSelectGroup", item);
    },
  },
});
</script>
