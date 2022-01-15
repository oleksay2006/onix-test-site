import { Module } from "vuex";

const store: Module<any, any> = {
  namespaced: true,
  state: {
    images: [
      {
        name: "Town",
        source: "town.jpg",
      },
      {
        name: "Beach",
        source: "beach.jpg",
      },
      {
        name: "Fiord",
        source: "fiord.jpg",
      },
      {
        name: "Seaside",
        source: "beach-2.jpg",
      },
    ] as Array<object>,
    messages: [
      {
        text: "Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users",
      },
      {
        text: "Emilee Simchenko commented on Account for teams and personal in bottom style",
      },
      {
        text: "Darika Samak uploaded 4 files on An option to search in current projects or in all projects",
      },
    ],
  },
  actions: {
    IMAGE_INDEX({ commit }, index) {
      commit("CHANGE_INDEX", index);
    },
  },
};
export default store;
