import { Module } from "vuex";
import { taskInterface } from "@/interfaces/task.interface";
import Status from "@/enums/StatusEnum";
import {
  getTasks,
  postTask,
  deleteTask,
  updateTask,
  removeAnimation,
  changeStatus,
} from "@/service/tasksApi";

const store: Module<any, any> = {
  namespaced: true,
  state: {
    tasks: [] as taskInterface[],
  },
  mutations: {
    SET_TASKS_TO_STATE: (state, response_data: taskInterface[]) => {
      state.tasks = response_data;
    },
  },
  actions: {
    SET_TASKS_TO_STATE({ commit }) {
      getTasks()
        .then(function (response) {
          commit("SET_TASKS_TO_STATE", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    CREATE_NEW_TASK({ dispatch }, newCard: taskInterface) {
      postTask(newCard)
        .then(function () {
          dispatch("SET_TASKS_TO_STATE");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    DELETE_TASK({ dispatch }, id: number) {
      deleteTask(id)
        .then(function () {
          dispatch("SET_TASKS_TO_STATE");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    CHANGE_STATUS({ dispatch }, taskData: { status: Status; id: number }) {
      changeStatus(taskData)
        .then(function () {
          dispatch("SET_TASKS_TO_STATE");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    CHANGE_TASK({ dispatch }, changedTask: taskInterface) {
      updateTask(changedTask)
        .then(function () {
          dispatch("SET_TASKS_TO_STATE");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    REMOVE_ANIMATION({ dispatch }, id: number) {
      removeAnimation(id)
        .then(function () {
          dispatch("SET_TASKS_TO_STATE");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
export default store;
