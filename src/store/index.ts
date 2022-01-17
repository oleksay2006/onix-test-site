import { createStore } from "vuex";
import { taskInterface } from "@/interfaces/task.interface";
import Status from "@/enums/StatusEnum";
import activityPageStore from "./modules/activityPage";
import tasksStore from "./modules/tasksModule";
import createPersistedState from "vuex-persistedstate";
// const tasksState = createPersistedState({
//   paths: ['tasks']
// })

export default createStore({
  state: {},
  plugins: [createPersistedState()],
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    activityPageModule: activityPageStore,
    tasksModule: tasksStore,
  },
});
