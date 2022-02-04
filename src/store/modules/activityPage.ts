import { Module } from "vuex";
import { activityApi } from "@/service/activityApi";

const store: Module<any, any> = {
  namespaced: true,
  state: {
    notifications: false as boolean,
    img_index: 0 as number,
    images: [] as Array<object>,
    messages: [] as Array<object>,
  },
  mutations: {
    CHANGE_INDEX: (state, index: number) => {
      state.img_index = index;
    },
    SHOW_NOTIFICATIONS: (state) => {
      state.notifications = true;
    },
    SET_INFO_TO_STATE: (state, response) => {
      state.messages = response.messages;
      state.images = response.images;
    },
  },
  actions: {
    SET_INFO_TO_STATE({ commit }) {
      activityApi
        .getActivity()
        .then(function (response) {
          commit("SET_INFO_TO_STATE", response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    IMAGE_INDEX({ commit }, index: number) {
      commit("CHANGE_INDEX", index);
    },
    SHOW_NOTIFICATIONS({ commit }) {
      commit("SHOW_NOTIFICATIONS");
    },
  },
};
export default store;
