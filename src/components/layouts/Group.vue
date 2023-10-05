<template>
  <div class="container-group">
    <div class="container-item-group" v-for="(item, index) in groupList" :key="index">
      <div class="container-subitem-group">
        <img src="../../assets/images/field.png" alt="">
        <span>{{  item.categoryGroupItemName }}</span>
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

    .container-subitem-group{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 28px;
      
      img {
        width: 90px;
        height: 90px;
        margin-bottom: 12px;

      }

      span {
        color: var(--vt-c-secondary);
        font-size: 20px;
        text-align: center;
        width: 120px;
      }
    }
  }
  
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { useGetMasterCategoryGroup } from "./LayoutComposable";

export default defineComponent({
  name: "Group",
  data() {
    return {
      groupList: [] as any
    };
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      let resp: any = await useGetMasterCategoryGroup();
      resp.forEach((item: any) => {
        item.categoryGroupItems.forEach((subitem: any) => {
          this.groupList.push(subitem)
        });        
      });
    },
  },
});
</script>
