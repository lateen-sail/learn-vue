import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/Layout.vue";
import NotFoundPage from "@/views/NotFound.vue";
import HomePage from "@/views/Home.vue";
import CounterPage from "@/views/learning/Counter.vue";
import ApiPage from "@/views/learning/Api.vue";
import ComputedPage from "@/views/learning/Computed.vue";
import MethodPage from "@/views/learning/Method.vue";
import CachePage from "@/views/learning/Cache.vue";
import WatchPage from "@/views/learning/Watch.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: HomePage,
        meta: {
          title: "ホーム",
        },
      },
      {
        path: "/counter",
        name: "Counter",
        component: CounterPage,
        meta: {
          title: "カウンター",
        },
      },
      {
        path: "/api",
        name: "Api",
        component: ApiPage,
        meta: {
          title: "API",
        },
      },
      {
        path: "/computed",
        name: "Computed",
        component: ComputedPage,
        meta: {
          title: "算出プロパティ",
        },
      },
      {
        path: "/method",
        name: "Method",
        component: MethodPage,
        meta: {
          title: "メソッド",
        },
      },
      {
        path: "/cache",
        name: "Cache",
        component: CachePage,
        meta: {
          title: "メソッド",
        },
      },
      {
        path: "/watch",
        name: "Watch",
        component: WatchPage,
        meta: {
          title: "監視プロパティ",
        },
      },
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFoundPage,
        meta: {
          title: "404",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
