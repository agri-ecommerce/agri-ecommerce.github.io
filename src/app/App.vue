<template>
  <div class="container-main" v-if="resWidth > 1020">
    <TopBanner></TopBanner>
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
.container-app {
  max-width: 1920px;
  margin: 0 auto;
  // height: calc(100vh - 360px);
  background-color: #fffdf9;
  padding: 0 100px;
  @media only screen and (max-width: 1900px) {
    max-width: 1366px;
    padding: 0 40px;
  }
  @media only screen and (max-width: 1300px) {
    max-width: 1024px;
    padding: 0 40px;
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
export default defineComponent({
  name: "App",
  data() {
    return {
      resWidth: 0 as number
    };
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
