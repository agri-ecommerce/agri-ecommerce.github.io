import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { path } from "@/common/path";
const routes: Array<RouteRecordRaw> = [
  {
    path: path.main.path,
    name: path.main.name,
    redirect: path.groupList.path,
    component: () => import( /* webpackChunkName: "main" */ "@/components/layouts/MainFrame.vue"),
    children: [
      {
        path: path.groupList.path,
        name: path.groupList.name,
        component: () => import( /* webpackChunkName: "groupList" */ "@/views/GroupList/index.vue"),
        meta: { requiresCustomer: false },
      },
      {
        path: `${path.productList.path}/:filterId`,
        name: path.productList.name,
        component: () => import( /* webpackChunkName: "productList" */ "@/views/ProductList/index.vue"),
        meta: { requiresCustomer: false },
      },
    ]
  },
  {
    path: path.basket.path,
    name: path.basket.name,
    component: () => import( /* webpackChunkName: "basket" */ "@/views/Basket/index.vue"),
    meta: { requiresCustomer: false },
  },
  {
    path: path.checkOut.path,
    name: path.checkOut.name,
    component: () => import( /* webpackChunkName: "checkOut" */ "@/views/CheckOut/index.vue"),
    meta: { requiresCustomer: false },
  },
  {
    path: path.payment.path,
    name: path.payment.name,
    component: () => import( /* webpackChunkName: "payment" */ "@/views/Payment/index.vue"),
    meta: { requiresCustomer: false },
  }
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