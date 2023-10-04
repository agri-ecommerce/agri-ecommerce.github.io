<template>
  <div class="container-header">
    <div class="logo">
      <!-- <h1>พันธ์ทวี</h1> -->
      <img src="@/assets/images/logo.png" alt="">
    </div>
    <div class="search">
      <Search />
    </div>
    <div class="menu">
      <Menu></Menu>
      <div class="profile">
        ลงทะเบียน
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-header {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  height: 80px;
  padding: 0 100px;
  background-color: var(--vt-c-primary);
  align-content: center;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1366px) {
    height: 60px;
  }

  .logo {
    display: flex;
    h1 {
      color: var(--vt-c-white);
      font-family: 'Kanit-Medium';
      font-size: 48px;
      @media only screen and (max-width: 1366px) {
        font-size: 32px;
      }
    }
    img {
      height: 70px;
    }
  }

  // .search {}

  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    .profile {
      margin-left: 32px;
      display: flex;
      height: 42px;
      background-color: var(--vt-c-white);
      border-radius: 50px;
      border: none;
      font-size: 24px;
      padding: 2px 16px;
      align-items: center;
      color: var(--vt-c-secondary);
      justify-content: center;
      @media only screen and (max-width: 1366px) {
        font-size: 18px;
        border-radius: 40px;
        height: 32px;
      }
  }
}
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Search from '@/components/forms/Search.vue';
import Menu from "./Menu.vue";
export default defineComponent({
  name: "Header",
  data() {
    return { };
  },
  components: {
    Search,
    Menu
  },
});
</script>
