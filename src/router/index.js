import { createRouter, createWebHistory } from 'vue-router';
import LogIn from "../views/LogIn.vue";


const routes = [
  {
    path: "/",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/dashboard",
    name: "DashBoard",
    component: DashBoard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
