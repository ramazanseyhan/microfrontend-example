import { createApp } from "vue";
import App from "./App";
import { createRouter, createWebHistory } from "vue-router";

import About from "./pages/About.vue";
import Home from "./pages/Home.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/about", component: About, name: "about" }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const mount = (el) => {
  const app = createApp(App);
  app.use(router);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
