import { createApp } from "vue";
import App from "./App";
import { createRouter, createWebHistory } from "vue-router";

import HelloVueApp from "./components/HelloVueApp.vue";
import HelloReactApp from "./components/HelloReactApp.vue";

const routes = [
  { path: "/", component: HelloVueApp, name: "vueApp" },
  { path: "/react", component: HelloReactApp, name: "reactApp" },
];

const router = createRouter({
  history: createWebHistory(),
  routes, 
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
