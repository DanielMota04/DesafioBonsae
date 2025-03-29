import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import AcademicPeriod from "./views/AcademicPeriod.vue";
import Disciplines from "./views/Disciplines.vue";
import Classes from "./views/Classes.vue";
import Users from "./views/Users.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/academicPeriod", component: AcademicPeriod },
  { path: "/disciplines", component: Disciplines },
  { path: "/classes", component: Classes },
  { path: "/users", component: Users },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
