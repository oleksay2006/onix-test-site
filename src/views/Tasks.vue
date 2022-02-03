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
    v-on:click="showChange(task, $event)"
  )
    //- :load.once="removeAnimation(task)",
    .first-part-task
      h3.title(:ref="setItemRef") {{ task.customData.title }}
      p.text {{ task.customData.text }}
    p.time Выполнить до {{ task.customData.time }}
    fa.trash-alt.test(
      icon="trash-alt",
      v-on:click="deleteTask(task.customData.id)"
    )
</template>
<script lang="ts">
import { ref, defineComponent, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { taskInterface } from "@/interfaces/task.interface";
import Status from "@/enums/StatusEnum";
import AddTaskModal from "@/components/AddTaskModal.vue";
import TaskDetailsModal from "@/components/TaskDetailsModal.vue";
import SearchTask from "@/components/SearchTask.vue";
import { modalsInfo } from "@/composables/modalsInfo";

export default defineComponent({
  name: "Tasks",
  components: {
    AddTaskModal,
    TaskDetailsModal,
    SearchTask,
  },
  setup() {
    let sortedProducts = ref<taskInterface[]>([]);
    const store = useStore();
    const tasks = computed(() => store.state.tasksModule.tasks);
    // Before the component is mounted, the value
    // of the ref is `[]` which is the default
    let num: number = 0;
    const divs = ref([]);
    const setItemRef = (el: HTMLElement) => {
      if (el) {
        divs.value.push(el);
      }
    };
    onMounted(() => {
      divs.value.forEach((element: HTMLElement) => {
        setTimeout(() => {
          element.classList.add("animation");
        }, num);
        num += 500;
      });
    });
    function setSearchValue(data: taskInterface[]) {
      sortedProducts.value = data;
    }
    // function removeAnimation(task: taskInterface) {
    //   if (task.customData.isNew == true) {
    //     setTimeout(() => {
    //       store.dispatch("tasksModule/REMOVE_ANIMATION", task.customData.id);
    //     }, 2000);
    //   }
    // }
    function deleteTask(id: number) {
      store.dispatch("tasksModule/DELETE_TASK", id);
    }
    const filteredProducts = computed(() => {
      if (sortedProducts.value.length) {
        return sortedProducts.value;
      } else {
        return tasks.value;
      }
    });
    return {
      setItemRef,
      filteredProducts,
      sortedProducts,
      divs,
      setSearchValue,
      // removeAnimation,
      deleteTask,
      Status,
      ...modalsInfo(),
      tasks,
    };
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
