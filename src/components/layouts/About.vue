<template>
  <div class="container-about">
  </div>
  <div class="container-copyright">
    <span>© สงวนสิทธิ์ 2566 บริษัท ซ็อปปิ้ง จำกัด</span>
  </div>
</template>

<style scoped lang="scss">
.container-about {
  display: flex;
  height: 250px;
  padding: 0px 100px;
  background-color: var(--vt-c-primary);
}

.container-copyright {
  display: flex;
  height: 30px;
  background-color: var(--vt-c-secondary);
  justify-content: center;
  align-items: center;

  span {
    color: var(--vt-c-white);
    font-family: "Kanit-Light";
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Search from '@/components/forms/Search.vue';
import Menu from "./Menu.vue";
export default defineComponent({
  name: "About",
  data() {
    return {};
  },
  components: {
    Search,
    Menu
  },
});
</script>
