import { Module } from "vuex";
import { taskInterface } from "@/interfaces/task.interface";
import Status from "@/enums/StatusEnum";

const store: Module<any, any> = {
  namespaced: true,
  state: {
    modal: false as boolean,
    completedTasks: 372 as number,
    openedTasks: 11 as number,
    tasks: [
      {
        customData: {
          id: 0,
          title: "Task 1",
          text: "Go to the shop",
          time: "2022-06-07",
          isNew: false,
          status: Status.inProgress,
        },
        dates: "2022-05-07",
      },
      {
        customData: {
          id: 1,
          title: "Task 2",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum non excepturi voluptates recusandae minima",
          time: "2022-01-05",
          isNew: false,
          status: Status.inProgress,
        },
        dates: "2022-01-01",
      },
      {
        customData: {
          id: 2,
          title: "Task 3",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum non excepturi voluptates recusandae minima",
          time: "2022-01-16",
          isNew: false,
          status: Status.toDo,
        },
        dates: "2022-01-12",
      },
    ] as taskInterface[],
  },
  mutations: {
    SET_NEW_TASK: (state, newCard) => {
      state.tasks.push(newCard);
      console.log(state.tasks);
    },
    DELETE_TASK: (state, id) => {
      state.tasks = state.tasks.filter((t) => t.customData.id !== id);
    },
    CHANGE_STATUS: (state, taskData) => {
      const task = state.tasks.find(
        (task) => task.customData.id == taskData.id
      );
      task.customData.status = taskData.status;
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
    CHANGE_TASK: (state, changedTask) => {
      const task = state.tasks.find(
        (task) => task.customData.id == changedTask.customData.id
      );
      task.customData.title = changedTask.customData.title;
      task.customData.text = changedTask.customData.text;
      task.customData.time = changedTask.customData.time;
      task.customData.status = changedTask.customData.status;
      // task.dates = changedTask.dates;
    },
  },
  actions: {
    CREATE_NEW_TASK({ commit }, newCard) {
      commit("SET_NEW_TASK", newCard);
    },
    DELETE_TASK({ commit }, id) {
      console.log(id);
      commit("DELETE_TASK", id);
    },
    CHANGE_STATUS({ commit }, taskData) {
      commit("CHANGE_STATUS", taskData);
    },
    CHANGE_NUMBER_OF_TASKS({ commit }) {
      commit("CHANGE_NUMBER_OF_TASKS");
    },
    SHOW_MODAL({ commit }) {
      commit("SHOW_MODAL");
    },
    HIDE_MODAL({ commit }) {
      commit("HIDE_MODAL");
    },
    CHANGE_TASK({ commit }, changedTask) {
      commit("CHANGE_TASK", changedTask);
    },
  },
};
export default store;
