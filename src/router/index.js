import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/Layout.vue";
import HomePage from "@/views/Home.vue";
import CounterPage from "@/views/learning/Counter.vue";
import ApiPage from "@/views/learning/Api.vue";
import ComputedPage from "@/views/learning/Computed.vue";

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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
