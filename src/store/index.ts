import { createStore } from "vuex";
import { taskInterface } from "@/interfaces/task.interface";
import Status from "@/enums/StatusEnum";
import activityPageStore from "./modules/activityPage";
// import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    img_index: 0 as number,
    modal: false as boolean,
    completedTasks: 372 as number,
    openedTasks: 11 as number,
    tasks: [
      {
        // id: 0,
        customData: {
          id: 0,
          title: "Task 1",
          text: "Go to the shop",
          time: "2022-06-07",
          isNew: false,
          status: Status.inProgress,
        },
        dates: new Date(
          new Date("2022-06-07").getFullYear(),
          new Date("2022-06-07").getMonth(),
          new Date("2022-06-07").getDate()
        ),
      },
      {
        // id: 1,
        customData: {
          id: 1,
          title: "Task 2",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum non excepturi voluptates recusandae minima",
          time: "2022-01-01",
          isNew: false,
          status: Status.inProgress,
        },
        dates: new Date(
          new Date("2022-01-01").getFullYear(),
          new Date("2022-01-01").getMonth(),
          new Date("2022-01-01").getDate()
        ),
      },
      {
        // id: 2,
        customData: {
          id: 2,
          title: "Task 3",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum non excepturi voluptates recusandae minima",
          time: "2022-01-01",
          isNew: false,
          status: Status.toDo,
        },
        dates: new Date(
          new Date("2022-01-01").getFullYear(),
          new Date("2022-01-01").getMonth(),
          new Date("2022-01-01").getDate()
        ),
      },
    ] as taskInterface[],
  },
  // plugins: [createPersistedState()],
  mutations: {
    CHANGE_TASK: (state, changedTask) => {
      const task = state.tasks.find(
        (task) => task.customData.id == changedTask.customData.id
      );
      task.customData.title = changedTask.customData.title;
      task.customData.text = changedTask.customData.text;
      task.customData.time = changedTask.customData.time;
      task.customData.status = changedTask.customData.status;
      task.dates = changedTask.dates;
    },
    CHANGE_STATUS: (state, taskData) => {
      const task = state.tasks.find(
        (task) => task.customData.id == taskData.id
      );
      task.customData.status = taskData.status;
    },
    SET_NEW_TASK: (state, newCard) => {
      state.tasks.push(newCard);

      console.log(state.tasks);
    },
    DELETE_TASK: (state, id) => {
      state.tasks = state.tasks.filter((t) => t.customData.id !== id);
    },
    CHANGE_NUMBER_OF_TASKS: (state) => {
      state.completedTasks += 1;
      state.openedTasks -= 1;
      state.modal = false;
    },
    SHOW_MODAL: (state) => {
      state.modal = true;
    },
    HIDE_MODAL: (state) => {
      state.modal = false;
    },
    CHANGE_INDEX: (state, index) => {
      state.img_index = index;
    },
  },
  actions: {
    CHANGE_TASK({ commit }, changedTask) {
      commit("CHANGE_TASK", changedTask);
    },
    CHANGE_STATUS({ commit }, taskData) {
      commit("CHANGE_STATUS", taskData);
    },
    SHOW_MODAL({ commit }) {
      commit("SHOW_MODAL");
    },
    HIDE_MODAL({ commit }) {
      commit("HIDE_MODAL");
    },
    CHANGE_NUMBER_OF_TASKS({ commit }) {
      commit("CHANGE_NUMBER_OF_TASKS");
    },
    IMAGE_INDEX({ commit }, index) {
      commit("CHANGE_INDEX", index);
    },
    CREATE_NEW_TASK({ commit }, newCard) {
      commit("SET_NEW_TASK", newCard);
    },
    DELETE_TASK({ commit }, id) {
      commit("DELETE_TASK", id);
    },
  },
  getters: {
    TASKS(state) {
      return state.tasks;
    },
  },
  modules: {
    activityPageModule: activityPageStore,
  },
});
