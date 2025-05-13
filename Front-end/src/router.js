import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import AcademicPeriod from "./views/AcademicPeriod.vue";
import Disciplines from "./views/Disciplines.vue";
import Classes from "./views/Classes.vue";
import Users from "./views/Users.vue";
import LinkTeacherToClass from "./views/LinkTeacherToClass.vue";
import LinkStudentToClass from "./views/LinkStudentToClass.vue";

const routes = [
  { path: "/", component: Home, props: true},
  { path: "/academicPeriod/:id", component: AcademicPeriod, props: true },
  { path: "/disciplines/:id", component: Disciplines, props: true },
  { path: "/classes/:id", component: Classes, props: true },
  { path: "/users/:id", component: Users, props: true },
  { path: "/LinkTeacherToClass/:id", component: LinkTeacherToClass, props: true },
  { path: "/LinkStudentToClass/:id", component: LinkStudentToClass, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
