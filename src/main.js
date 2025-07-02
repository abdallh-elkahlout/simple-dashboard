import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
const vuetify = createVuetify({
  components,
  directives,
});

import mitt from "mitt";
const Emitter = mitt();

createApp(App)
  .use(router)
  .provide("Emitter", Emitter)
  .use(vuetify)
  .mount("#app");
