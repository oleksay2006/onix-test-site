import { createStore } from "vuex";
import { taskInterface } from "@/interfaces/task.interface";
import Status from "@/enums/StatusEnum";
import activityPageStore from "./modules/activityPage";
import tasksStore from "./modules/tasksModule";
import VuexPersistence from "vuex-persist";
// import createPersistedState from "vuex-persistedstate";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  plugins: [vuexLocal.plugin],
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    activityPageModule: activityPageStore,
    tasksModule: tasksStore,
  },
});
