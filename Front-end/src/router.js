import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import PeriodoLetivo from "./views/PeriodoLetivo.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/periodoLetivo", component: PeriodoLetivo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
