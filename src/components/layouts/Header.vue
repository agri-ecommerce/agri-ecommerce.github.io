<template>
  <div class="container-header">
    <div class="header">
      <div class="logo">
        <img @click="onMain" src="@/assets/images/logo.png" alt="" />
        <Search />
      </div>
      <div class="menu">
        <Menu></Menu>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-header {
  width: 100%;
  background-color: var(--vt-c-primary);

  .header {
    display: grid;
    max-width: 1366px;
    margin: 0 auto;
    grid-template-columns: 1fr 1000px;
    height: var(--60px);
    padding: 0 var(--32px);
    align-content: center;
    justify-content: space-between;
    align-items: center;

    // @media only screen and (max-width: 1300px) {
    //   height: 60px;
    //   margin: 0 auto;
    //   padding: 0 20px;
    //   max-width: 1024px;
    //   grid-template-columns: 1fr 720px;
    // }

    .logo {
      display: flex;
      cursor: pointer;
      width: 100%;
      align-content: center;
      align-items: center;
      gap: var(--16px);

      img {
        height: var(--80px);

        // @media only screen and (max-width: 1300px) {
        //   height: var(--60px);
        // }
      }
    }

    .search-menu {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .menu {
        display: flex;
        flex-direction: row;
        align-items: center;

        // .profile {
        //   cursor: pointer;
        //   margin-left: 32px;
        //   display: flex;
        //   height: 42px;
        //   background-color: var(--vt-c-white);
        //   border-radius: 50px;
        //   border: none;
        //   font-size: 24px;
        //   padding: 2px 16px;
        //   align-items: center;
        //   color: var(--vt-c-secondary);
        //   justify-content: center;

        //   @media only screen and (max-width: 1900px) {
        //     font-size: 14px;
        //     border-radius: 40px;
        //     height: 28px;
        //     margin-left: 28px;
        //   }

        //   @media only screen and (max-width: 1300px) {
        //     font-size: 12px;
        //     height: 22px;
        //     border-radius: 32px;
        //     margin-left: 20px;
        //   }
        // }
      }
    }


  }
}
</style>

<script lang="ts">
import { defineComponent, nextTick } from 'vue';
import Search from "@/components/forms/Search.vue";
import Menu from "./Menu.vue";
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
  },
  computed: {
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
