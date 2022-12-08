import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import components from './components/UI'

const app = createApp(App);

app.use(createPinia());
app.use(router);

components.forEach(component => {
  app.component(component.name, component)
})

app.mount("#app");
