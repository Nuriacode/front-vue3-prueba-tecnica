import { createRouter, createWebHistory } from 'vue-router';
import LogIn from "../views/LogIn.vue";
import DashBoard from "../views/DashBoard.vue";
import NuevoUsuario from "../views/NuevoUsuario.vue";
import EditarUsuario from "../views/EditarUsuario.vue";

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
  {
    path: "/nuevo",
    name: "Nuevo",
    component: NuevoUsuario,
  },
  {
    path: "/editar/:id",
    name: "Editar",
    component: EditarUsuario,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

