import { createStore } from "vuex";
import { taskInterface } from "@/interfaces/task.interface";

export default createStore({
  state: {
    img_index: 0 as number,
    modal: false as boolean,
    completedTasks: 372 as number,
    openedTasks: 11 as number,
    tasks: [
      {
        title: "Task 1",
        text: "Go to the shop",
        time: "13:30 PM",
        id: 0,
        isNew: false,
      },
      {
        title: "Task 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum non excepturi voluptates recusandae minima",
        time: "09:00 PM",
        id: 1,
        isNew: false,
      },
      {
        title: "Task 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum non excepturi voluptates recusandae minima",
        time: "19:25 PM",
        id: 2,
        isNew: false,
      },
    ] as taskInterface[],
  },
  mutations: {
    SET_NEW_TASK: (state, newCard) => {
      state.tasks.push(newCard);

      console.log(state.tasks);
    },
    DELETE_TASK: (state, id) => {
      state.tasks = state.tasks.filter((t) => t.id !== id);
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
    Change_index: (state, index) => {
      state.img_index = index;
    },
  },
  actions: {
    SHOW_MODAL({ commit }) {
      commit("SHOW_MODAL");
    },
    HIDE_MODAL({ commit }) {
      commit("HIDE_MODAL");
    },
    CHANGE_NUMBER_OF_TASKS({ commit }) {
      commit("CHANGE_NUMBER_OF_TASKS");
    },
    Image_index({ commit }, index) {
      commit("Change_index", index);
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
  modules: {},
});
