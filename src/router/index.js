import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import userProfile from "@/views/userProfile.vue";
import tablesPage from "@/views/tablesPage.vue";
import mapsPage from "@/views/mapsPage.vue";
import notificationPage from "@/views/notificationPage.vue";

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
  {
    path: "/maps-page",
    name: "mapsPage",
    component: mapsPage,
  },
  {
    path: "/notification-page",
    name: "notificationPage",
    component: notificationPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
