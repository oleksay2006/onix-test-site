<template lang="pug">
.kanban-tab.tab.tab-2
  TaskDetailsModal(
    v-show="isShowChange",
    v-on:removeEditTask="removeEditTask",
    v-bind:currentTask="currentTask"
  )
  SearchTask(v-on:setSearch="setSearchValue")
  .table
    .toDoHeadDiv.head(
      v-for="stat in Status",
      @drop="onDrop($event, stat)",
      @dragenter.prevent,
      @dragover.prevent
    )
      .div_th.toDo {{ stat }}
        p.numberOfTasks Number of tasks: {{ tasksForKanban(stat).length }}
      TaskCard(
        v-for="(task, index) in tasksForKanban(stat)",
        :key="'todo_task-' + index",
        draggable="true",
        @dragstart="startDrag($event, task)",
        :task="task",
        v-on:click="showChange(task, $event)"
      )
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import Status from "@/enums/StatusEnum";
import TaskCard from "@/components/TaskCard.vue";
import { taskInterface } from "@/interfaces/task.interface";
import TaskDetailsModal from "@/components/TaskDetailsModal.vue";
import SearchTask from "@/components/SearchTask.vue";
import { dragAndDrop } from "@/composables/dragAndDrop";
import { modalsInfo } from "@/composables/modalsInfo";

export default defineComponent({
  name: "Kanban",
  components: {
    TaskCard,
    TaskDetailsModal,
    SearchTask,
  },
  setup() {
    const store = useStore();
    const tasks = computed(() => store.state.tasksModule.tasks);

    let sortedProducts = ref<taskInterface[]>([]);
    function tasksForKanban(status: Status) {
      return filteredProducts.value.filter(
        (t) => t.customData.status == status
      );
    }
    function setSearchValue(data: taskInterface[]) {
      sortedProducts.value = data;
    }
    const filteredProducts = computed(() => {
      if (sortedProducts.value.length) {
        return sortedProducts.value;
      } else {
        return tasks.value;
      }
    });
    return {
      setSearchValue,
      tasksForKanban,
      filteredProducts,
      sortedProducts,
      Status,
      ...dragAndDrop(),
      ...modalsInfo(),
    };
  },
});
</script>
<style scoped lang="sass">
.table
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif

.toDo,
.inProgress,
.done
  font-size: 17px
  font-weight: bold

.inProgressHeadDiv,
.doneHeadDiv
  margin-top: 20px

.div_th
  background: #ffe4b5
  color: #000
  padding: 10px 40px
  border-style: solid
  border-width: 0 4px 4px 0
  border-color: white

hr
  margin-top: 16px
  border-top: 5px dotted #ffe4b5
  border-bottom: none
  border-right: none
  border-left: none

.head
  display: flex
  align-items: center
  flex-wrap: wrap

.numberOfTasks
  font-size: 13px
  font-weight: normal

.done
  border-radius: 0 0 0 10px

.toDo
  border-radius: 10px 0 0 0

@media only screen and (max-width: 768px)
  .kanban-tab
    width: 80%

@media only screen and (max-width: 640px)
  .div_th
    padding: 10px 20px

  .taskCard
    padding: 12px 20px

@media only screen and (max-width: 480px)
  .kanban-tab
    padding: 20px

  .div_th
    padding: 5px 15px
    font-size: 16px

  .taskCard
    padding: 8.2px 20px
    font-size: 15px
</style>
