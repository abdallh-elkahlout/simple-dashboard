import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import userProfile from "@/views/userProfile.vue";
import tablesPage from "@/views/tablesPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/profile",
    name: "profile",
    component: userProfile,
  },
  {
    path: "/tables-page",
    name: "tablesPage",
    component: tablesPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
