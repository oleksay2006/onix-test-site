<template lang="pug">
.tasks-tab.tab.tab-1
  SearchTask(v-on:setSearch="setSearchValue")
  .list
    p.day TASK LIST
    .add-new(v-on:click="showNew()")
      p Add new task +
  AddTaskModal(v-show="isShow", v-on:removeNew="removeNew()")
  TaskDetailsModal(
    v-show="isShowChange",
    v-on:removeEditTask="removeEditTask",
    v-bind:currentTask="currentTask"
  )
  .message.task(
    v-for="(task, index) in filteredProducts",
    :key="'task-' + index",
    :class="{ new_animation: task.customData.isNew }",
    :load="removeAnimation(task)",
    v-on:click="showChange(task)"
  )
    .first-part-task
      h3.title(:ref="(el) => { if (el) divs[index] = el; }") {{ task.customData.title }}
      p.text {{ task.customData.text }}
    p.time Выполнить до {{ task.customData.time }}
    fa.trash-alt(icon="trash-alt", v-on:click="deleteTask(task.customData.id)")
</template>
<script lang="ts">
import { ref, defineComponent, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { taskInterface } from "@/interfaces/task.interface";
import useVuelidate from "@vuelidate/core";
import Status from "@/enums/StatusEnum";
import AddTaskModal from "@/components/AddTaskModal.vue";
import TaskDetailsModal from "@/components/TaskDetailsModal.vue";
import SearchTask from "@/components/SearchTask.vue";

export default defineComponent({
  name: "Tasks",
  components: {
    AddTaskModal,
    TaskDetailsModal,
    SearchTask,
  },
  setup() {
    const store = useStore();
    const tasks = computed(() => store.state.tasksModule.tasks);
    // Before the component is mounted, the value
    // of the ref is `[]` which is the default
    let num = 0;
    const divs = ref([]);
    onMounted(() => {
      divs.value.forEach((element) => {
        setTimeout(() => {
          element.classList.add("animation");
        }, num);
        num += 500;
      });
    });
    // function setSearchValue(data: taskInterface[]) {
    //   this.sortedProducts = data;
    // }
    // function removeAnimation(task: taskInterface) {
    //   setTimeout(() => {
    //     task.customData.isNew = false;
    //   }, 2000);
    // }
    // function showNew() {
    //   this.isShow = true;
    // }
    // function showChange(task: taskInterface) {
    //   this.currentTask = task;
    //   console.log(this.isShowChange);
    //   this.isShowChange = true;
    // }
    // function removeEditTask() {
    //   console.log(this.isShowChange);
    //   // this.isShowChange = false;
    // }
    // function removeNew() {
    //   this.isShow = false;
    // }
    function deleteTask(id: number) {
      store.dispatch("tasksModule/DELETE_TASK", id);
    }
    return {
      divs,
      tasks,
      // setSearchValue,
      // removeAnimation,
      // showNew,
      // showChange,
      // removeEditTask,
      // removeNew,
      deleteTask,
    };
  },
  data() {
    return {
      v$: useVuelidate(),
      title: "",
      description: "",
      time: "",
      isShow: false,
      isShowChange: false,
      currentTask: {
        customData: {
          id: 0,
          title: "",
          text: "",
          time: "",
          isNew: false,
          status: "",
        },
        dates: "",
      } as taskInterface,
      Status,
      sortedProducts: [] as taskInterface[],
      searchValue: "",
    };
  },
  methods: {
    setSearchValue(data: taskInterface[]) {
      this.sortedProducts = data;
    },
    removeAnimation(task: taskInterface) {
      setTimeout(() => {
        task.customData.isNew = false;
      }, 2000);
    },
    showNew() {
      this.isShow = true;
    },
    showChange(task: taskInterface) {
      console.log(task);
      this.currentTask = task;
      this.isShowChange = true;
    },
    removeEditTask() {
      this.isShowChange = false;
    },
    removeNew() {
      this.isShow = false;
    },
  },
  computed: {
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.tasks;
      }
    },
  },
});
</script>
<style scoped lang="scss">
.helper {
  margin-top: 3px;
  font-size: 13px;
  color: red;
}
.animation {
  animation-name: font;
  animation-duration: 1s;
}
.animation_2 {
  animation-name: font_2;
  animation-duration: 1s;
}
.new_animation {
  animation-name: task;
  animation-duration: 1s;
}

@keyframes font {
  0% {
    font-size: 19px;
  }
  50% {
    font-size: 24px;
  }
}
@keyframes task {
  0% {
    background-color: #fff;
  }
  25% {
    background-color: gray;
  }
  50% {
    background-color: #fff;
  }
  75% {
    background-color: gray;
  }
  100% {
    background-color: #fff;
  }
}
/* @keyframes font_2 {
  0% {
    font-size: 16px;
  }
  50% {
    font-size: 18px;
  }
} */
.invalid {
  border: 1px solid red !important;
  display: block;
}
.trash-alt {
  font-size: 20px;
  color: DarkGrey;
  cursor: pointer;
}
.new {
  flex-wrap: wrap;
}
.controls {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.check-square {
  cursor: pointer;
  font-size: 33px;
}
.close-window {
  cursor: pointer;
  font-size: 30px;
}
.hidden {
  display: none;
}
.new-input {
  margin-top: 10px;
  padding: 6px 13px;
  border-radius: 5px;
  border: 1px solid #cfd8dc;
  font-size: 14px;
  width: 170px;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  .add-new {
    background-color: #eaeaea;
    border-radius: 8px;
    cursor: pointer;
    padding: 10px;
  }
}
// .add-new {
//   background-color: #eaeaea;
//   /* height: 35px;
//   width: 120px; */
//   border-radius: 8px;
//   cursor: pointer;
//   padding: 10px;
// }
@media only screen and (max-width: 768px) {
  .new {
    flex-wrap: wrap;
  }
  .third-part-task {
    margin-top: 10px;
  }
  .controls {
    margin-top: 20px;
    flex-direction: row;
  }
  .close-window {
    margin-left: 10px;
    font-size: 33px;
  }
  .tasks-tab {
    width: 80%;
  }
  @keyframes font {
    0% {
      font-size: 19px;
    }
    50% {
      font-size: 22px;
    }
  }
}
@media only screen and (max-width: 480px) {
  .second-part-task {
    margin-top: 10px;
  }
}
@media only screen and (max-width: 426px) {
  .first-part-task p {
    width: 200px;
  }
}
@media only screen and (max-width: 400px) {
  .tasks-tab {
    padding: 20px;
  }
}
</style>
