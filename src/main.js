import { createApp } from "vue";
import App from "./App.vue";

// Routing
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("./views/Users/Users.vue") },
    {
      path: "/alltasks",
      component: () => import("./views/AllTasks/AllTask.vue"),
    },
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
