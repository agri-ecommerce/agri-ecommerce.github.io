import { createApp } from 'vue';
import "../assets/main.scss";
import App from './App.vue';
import vfmPlugin from "vue-final-modal";
import router from "../router/index";
import store from "@/store";

const initApp = (router: any) => {
  createApp(App).use(router).use(store).use(vfmPlugin).mount("#app");
};

initApp(router);