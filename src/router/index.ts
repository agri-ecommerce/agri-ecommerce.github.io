import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { path } from "@/common/path";
const routes: Array<RouteRecordRaw> = [
    {
        path: path.productList.path,
        name: path.productList.name,
        component: () => import( /* webpackChunkName: "landingPage" */ "@/views/ProductList/index.vue"),
        meta: { requiresCustomer: false },
    },
];
const router = createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
      // for reset scroll position
      return { top: 0 };
    },
  });


  router.beforeEach(async (to, from, next) => {
    next();
  })
  export default router;