<template>
  <TopBanner></TopBanner>
  <Header></Header>
  <div class="container-app">
    <RouterView />
  </div>
  <About></About>
</template>

<style scoped lang="scss">
.container-app {
  max-width: 1920px;
  margin: auto;
  // height: calc(100vh - 360px);
  background-color: #FFFDF9;
  padding: 0 100px;
}
</style>

<script lang="ts">
import { RouterView } from "vue-router";
import { defineComponent } from "vue";
import Header from '@/components/layouts/Header.vue';
import About from "@/components/layouts/About.vue";
import TopBanner from "@/components/layouts/TopBanner.vue";
export default defineComponent({
  name: "App",
  data() {
    return {

    }
  },
  components: {
    Header,
    About,
    TopBanner
  }
})
</script>
