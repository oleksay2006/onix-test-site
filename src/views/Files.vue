<template lang="pug">
.files-tab.tab.tab-5
  h3(v-on:click="Click") Изображения на вкладке Activity:
  ul
    li(v-for="(img, index) in images", :key="'image-' + index") {{ img.source }}
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
// import { taskInterface } from "@/interfaces/task.interface";
import Status from "@/enums/StatusEnum";

export default defineComponent({
  name: "Files",
  setup() {
    const axios = require("axios");
    const store = useStore();
    const images = computed(() => store.state.activityPageModule.images);
    function Click() {
      // store.dispatch("tasksModule/SET_TASKS_TO_STATE");
      // axios
      //   .post("https://shy-glitter-2150.getsandbox.com:443/tasks", {
      //     customData: {
      //       id: 3,
      //       title: "Task 1",
      //       text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum non excepturi voluptates recusandae minima",
      //       time: "2022-01-16",
      //       isNew: false,
      //       status: Status.toDo,
      //     },
      //     dates: "2022-01-12",
      //   })
      //   .then(function (response) {
      //     // обробка успішного запиту
      //     console.log(response.data);
      //   })
      //   .catch(function (error) {
      //     // обробка помилки
      //     console.log(error);
      //   });
      // axios
      //   .get("https://shy-glitter-2150.getsandbox.com:443/tasks")
      //   .then(function (response) {
      //     // обробка успішного запиту
      //     console.log(response.data);
      //   })
      //   .catch(function (error) {
      //     // обробка помилки
      //     console.log(error);
      //   });

      axios
        .delete(`https://shy-glitter-2150.getsandbox.com/tasks/1643390604834`)
        .then(function (response) {
          // обробка успішного запиту
          console.log(response.data);
          store.dispatch("tasksModule/SET_TASKS_TO_STATE");
        })
        .catch(function (error) {
          // обробка помилки
          console.log(error);
        });
      // const changedTask: taskInterface = {
      //   customData: {
      //     id: 0,
      //     title: "0",
      //     text: "0",
      //     time: "0",
      //     isNew: false,
      //     status: Status.inProgress,
      //   },
      // };
      // axios
      //   .put(
      //     `https://shy-glitter-2150.getsandbox.com:443/tasks/${changedTask.customData.id}`,
      //     changedTask
      //   )
      //   .then(function (response) {
      //     // обробка успішного запиту
      //     console.log(response.data);
      //   })
      //   .catch(function (error) {
      //     // обробка помилки
      //     console.log(error);
      //   });
    }
    return {
      Click,
      images,
      Status,
    };
  },
});
</script>
<style scoped lang="sass">
.error
  border: 1px solid red

ul
  padding-left: 20px
  li
    margin-top: 5px
    font-size: 17px
</style>
