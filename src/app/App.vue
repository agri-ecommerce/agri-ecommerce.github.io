<template>
  <div class="container-main" v-if="resWidth > 1020">
    <TopBanner v-if="isTop"></TopBanner>
    <Header></Header>
    <div class="container-app">
      <RouterView />
    </div>
    <About></About>
  </div>
  <div v-else class="container-not-support">
    <img src="../assets/images/logo2.png" alt="">
    <span>
      ขออภัยระบบยังไม่รองรับ กรุณาใช้บนคอมพิวเตอร์ หรือ Tablet
    </span>
  </div>
</template>

<style scoped lang="scss">
.container-main {
  width: 100%;

  .container-app {
    max-width: 1366px;
    margin: 0 auto;
    padding: 0 2rem;
    background-color: #fffdf9;
    // @media only screen and (max-width: 1900px) {
    //   max-width: 1366px;
    // }
    // @media only screen and (max-width: 1300px) {
    //   max-width: 1024px;
    //   padding: 0 20px;
    // }
  }
}

.container-not-support {
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  // padding: 0 64px;
  justify-content: center;
  align-items: center;

  img {
    max-width: 50vw;
  }

  span {
    text-align: center;
    padding: 0 64px;
  }
}
</style>

<script lang="ts">
import { RouterView } from "vue-router";
import { defineComponent } from "vue";
import Header from "@/components/layouts/Header.vue";
import About from "@/components/layouts/About.vue";
import TopBanner from "@/components/layouts/TopBanner.vue";
import { path } from "@/common/path";
export default defineComponent({
  name: "App",
  data() {
    return {
      resWidth: 0 as number,
      isTop: 1 as number,
      paths: path as any
    };
  },
  watch:{
    $route() {
      if(this.$route.name === this.paths.groupList.name) {
        this.isTop = 1;
      } else {
        this.isTop = 0;
      }
    },
  },
  components: {
    Header,
    About,
    TopBanner,
  },
  created() {
    this.onResolution();
  },
  methods: {
    onResolution() {
      let resolution = window.innerWidth;
      this.resWidth = resolution
    }
  },
});
</script>
 