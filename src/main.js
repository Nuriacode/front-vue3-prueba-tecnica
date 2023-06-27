import { createApp } from 'vue'
import { createRouter,createMemoryHistory }  from 'vue-router';
import './style.css'
import App from './App.vue'
import LogIn from './views/LogIn.vue'
import DashBoard from './views/DashBoard.vue'


//componentes
const Detail = { template:'<h1>detalle de mi app</h1>'}

//definir rutas --configuracion
const routes = [
  {
    path: "/",
    component: LogIn,
  },
  {
    path: "/dashboard",
    component: DashBoard,
  },
];

//crear objeto rutas de vue router --objeto de vue router
const router = createRouter({
    history: createMemoryHistory(),
    routes
})

//instanci de vue
const app = createApp(App)

app.use(router)


app.mount('#app')
