import { createStore } from "vuex";
import { taskInterface } from "@/interfaces/task.interface";

export default createStore({
  state: {
    tasks: {
      first: {},
      second: {},
      third: {},
    },
  },
  mutations: {
    SET_TASKS_TO_STATE: (state) => {
      const task: taskInterface = {
        title: "Task 1",
        text: "Go to the shop",
        time: "13:30 PM",
      };
      state.tasks.first = task;
      console.log(state.tasks.first);

      const task_2: taskInterface = {
        title: "Task 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum non excepturi voluptates recusandae minima",
        time: "09:00 PM",
      };
      state.tasks.second = task_2;
      console.log(state.tasks.second);

      const task_3: taskInterface = {
        title: "Task 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum non excepturi voluptates recusandae minima",
        time: "19:25 PM",
      };
      state.tasks.third = task_3;
      console.log(state.tasks.third);
    },
  },
  actions: {
    SET_TASKS({ commit }) {
      commit("SET_TASKS_TO_STATE");
    },
  },
  getters: {
    TASKS(state) {
      return state.tasks;
    },
  },
  modules: {},
});
