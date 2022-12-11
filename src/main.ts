import { createApp } from "vue";
import { createPinia } from "pinia";

import VIntersection from '@/directives/VIntersection'
import directives from "./directives";
import App from "./App.vue";
import router from "./router/router.ts";
import store from "./stores/index.ts"

import "./assets/main.css";
import components from './components/UI'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(store)

components.forEach(component => {
  app.component(component.name, component)
})


directives.forEach(directive => {
  app.directive(directive.name, directive);
})


app.mount("#app");
