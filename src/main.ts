import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Hello from './components/Hello.vue'

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path:'/',component: Hello}
  ]
})



const app = createApp(App)
app.use(router)
app.mount("#app")
