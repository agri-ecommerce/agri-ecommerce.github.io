<template>
  <div class="container-group">
    <div
      class="container-item-group"
      v-for="(item, index) in groupList"
      :key="index"
    >
      <div
        class="container-subitem-group"
        @click="onSelectGroup(item.productGroupId)"
      >
        <div class="icon-img">
          <img
            :src="`data:image/png;base64,${item.productGroupImage}`"
            alt=""
          />
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
        width: 100px;
        height: 100px;
        overflow: hidden;
        
        border-radius: 50%;
        padding: 10px;
        align-content: center;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: var(--vt-c-primary);
        }
        img {
          width: 80px;
          height: 80px;
          margin-bottom: 12px;
          // border-radius: 50%;
          
        }
      }

      span {
        color: var(--vt-c-secondary);
        font-size: 20px;
        text-align: center;
        font-family: 'Kanit-Medium';
        width: 120px;
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
