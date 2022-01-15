import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VCalendar from "v-calendar";

library.add(fas);
createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(VCalendar, {})
  .use(store)
  .use(router)
  .mount("#app");
