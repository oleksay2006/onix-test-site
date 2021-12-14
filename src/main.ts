import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import enums from "vue-enums";

library.add(fas);
createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(enums)
  .mount("#app");
