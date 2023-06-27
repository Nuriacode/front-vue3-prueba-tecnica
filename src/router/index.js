import { createRouter, createWebHistory } from 'vue-router';
import LogIn from "../views/LogIn.vue";
import DashBoard from "../views/DashBoard.vue";


const routes = [
  {
    name: "login",
    path: "/",
    component: LogIn,
  },
  {
    name: "dashboard",
    path: "/dashboard",
    component: DashBoard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

