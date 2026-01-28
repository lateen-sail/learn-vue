import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/Layout.vue";
import HomePage from "@/home/HomePage.vue";
import CounterPage from "@/learning/counter/Page.vue";
import ApiPage from "@/learning/api/Page.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: HomePage,
      },
      {
        path: "/counter",
        name: "Counter",
        component: CounterPage,
      },
      {
        path: "/api",
        name: "Api",
        component: ApiPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
