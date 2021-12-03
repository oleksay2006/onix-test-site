import { createStore } from "vuex";
import { taskInterface } from "@/interfaces/task.interface";
import { faTasks } from "@fortawesome/free-solid-svg-icons";

export default createStore({
  state: {
    // tasks: {
    //   task: {},
    //   task_2: {},
    //   task_3: {},
    // },
    tasks: [
      {
        title: "Task 1",
        text: "Go to the shop",
        time: "13:30 PM",
        id: 0,
        new: false,
        class: 'old'
      },
      {
        title: "Task 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum non excepturi voluptates recusandae minima",
        time: "09:00 PM",
        id: 1,
        new: false,
        class: 'old'
      },
      {
        title: "Task 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum non excepturi voluptates recusandae minima",
        time: "19:25 PM",
        id: 2,
        new: false,
        class: 'old'
      },
    ],
  },
  mutations: {
    // SET_TASKS_TO_STATE: (state) => {
    //   const task: taskInterface = {
    //     title: "Task 1",
    //     text: "Go to the shop",
    //     time: "13:30 PM",
    //     // id: 0,
    //   };
    //   // state.tasks.task = task;
    //   state.tasks.push(task)

    //   const task_2: taskInterface = {
    //     title: "Task 2",
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum non excepturi voluptates recusandae minima",
    //     time: "09:00 PM",
    //     // id: 1,
    //   };
    //   // state.tasks.task_2 = task_2;
    //   state.tasks.push(task_2)

    //   const task_3: taskInterface = {
    //     title: "Task 3",
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum non excepturi voluptates recusandae minima",
    //     time: "19:25 PM",
    //     // id: 2,
    //   };
    //   // state.tasks.task_3 = task_3;
    //   state.tasks.push(task_3)

    //   console.log(state.tasks)
    //   // state.tasks[Object.keys(state.tasks).length + 1] = newCard
    //   // console.log(newCard)
    //   // obj[newNum] = newVal;
    // },
    SET_NEW_TASK: (state, newCard) => {
      state.tasks.push(newCard);
      // state.tasks = Object.assign(state.tasks, newCard);

      console.log(state.tasks);
    },
    DELETE_TASK: (state, id) => {
      state.tasks = state.tasks.filter((t) => t.id !== id);
    },
  },
  actions: {
    // SET_TASKS({ commit }) {
    //   commit("SET_TASKS_TO_STATE");
    // },
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
