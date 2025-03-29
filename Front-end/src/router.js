import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import AcademicPeriod from "./views/AcademicPeriod.vue";
import Disciplines from "./views/Disciplines.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/academicPeriod", component: AcademicPeriod },
  { path: "/disciplines", component: Disciplines },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
