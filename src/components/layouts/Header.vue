<template>
  <div class="container-header">
    <div class="logo">
      <!-- <h1>พันธ์ทวี</h1> -->
      <img @click="onMain" src="@/assets/images/logo.png" alt="" />
    </div>
    <div class="search">
      <Search />
    </div>
    <div class="menu">
      <Menu></Menu>
      <div class="profile" @click="toggleModal">เข้าสู่ระบบ</div>
    </div>
    <SignInModal :showModal="openModal" @close="toggleModal"> </SignInModal>
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

  @media only screen and (max-width: 1600px) {
    height: 60px;
    padding: 0 40px;
  }

  .logo {
    display: flex;
    cursor: pointer;

    h1 {
      color: var(--vt-c-white);
      font-family: "Kanit-Medium";
      font-size: 48px;

      @media only screen and (max-width: 1366px) {
        font-size: 32px;
      }
    }

    img {
      height: 120px;

      @media only screen and (max-width: 1600px) {
        height: 100px;
      }
    }
  }

  // .search {}

  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;

    .profile {
      cursor: pointer;
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

      @media only screen and (max-width: 1600px) {
        font-size: 14px;
        border-radius: 40px;
        height: 28px;
        margin-left: 28px;
      }

      @media only screen and (max-width: 1300px) {
        font-size: 12px;
        height: 22px;
        border-radius: 32px;
        margin-left: 20px;
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, nextTick } from 'vue';
import Search from "@/components/forms/Search.vue";
import Menu from "./Menu.vue";
import SignInModal from "@/components/modals/SignInModal.vue";
import { path } from "@/common/path"
import { mapState } from 'vuex';
export default defineComponent({
  name: "Header",
  data() {
    return {
      openModal: false,
      paths: path as any,
    };
  },
  async mounted() {
    await nextTick();
    this.$emit('loaded');
  },
  components: {
    Search,
    Menu,
    SignInModal,
  },
  computed:{
    ...mapState('shop', {
      isFilter: (state: any) => {
        return state.isFilter
      }
    }),
  },
  methods: {
    toggleModal: function () {
      this.openModal = !this.openModal;
    },
    async onMain() {
      await this.$store.dispatch('shop/setFilter', 0);
      this.$router.push({ path: this.paths.main.path });
    }
  },
});
</script>
