<template lang="pug">
.kanban-tab.tab.tab-2
  TaskDetailsModal(
    v-show="isShowChange",
    v-on:removeEditTask="removeEditTask",
    v-bind:currentTask="currentTask"
  )
  //- table
  //-   tr(
  //-     @drop="onDrop($event, Status.toDo)",
  //-     @dragenter.prevent,
  //-     @dragover.prevent
  //-   )
  //-     th.toDo To Do
  //-       p.numberOfTasks Number of tasks: {{ toDoTasks.length }}
  //-     TaskCard(
  //-       v-for="(task, index) in toDoTasks",
  //-       :key="'todo_task-' + index",
  //-       draggable="true",
  //-       @dragstart="startDrag($event, task)",
  //-       :task="task",
  //-       v-on:click="showChange(task)"
  //-     )
  //-   tr(
  //-     @drop="onDrop($event, Status.inProgress)",
  //-     @dragenter.prevent,
  //-     @dragover.prevent
  //-   )
  //-     th In progress
  //-       p.numberOfTasks Number of tasks: {{ inProgress.length }}
  //-     TaskCard(
  //-       v-for="(task, index) in inProgress",
  //-       :key="'inProgress_task-' + index",
  //-       draggable="true",
  //-       @dragstart="startDrag($event, task)",
  //-       :task="task",
  //-       v-on:click="showChange(task)"
  //-     )
  //-   tr(
  //-     @drop="onDrop($event, Status.done)",
  //-     @dragenter.prevent,
  //-     @dragover.prevent
  //-   )
  //-     th.done Done
  //-       p.numberOfTasks Number of tasks: {{ done.length }}
  //-     TaskCard(
  //-       v-for="(task, index) in done",
  //-       :key="'done_task-' + index",
  //-       draggable="true",
  //-       @dragstart="startDrag($event, task)",
  //-       :task="task",
  //-       v-on:click="showChange(task)"
  //-     )
  //-     //- v-show="task.status == this.Status.done",

  .table
    .toDoHeadDiv.head(
      @drop="onDrop($event, Status.toDo)",
      @dragenter.prevent,
      @dragover.prevent
    )
      .div_th.toDo To-Do
        p.numberOfTasks Number of tasks: {{ toDoTasks.length }}
      TaskCard(
        v-for="(task, index) in toDoTasks",
        :key="'todo_task-' + index",
        draggable="true",
        @dragstart="startDrag($event, task)",
        :task="task",
        v-on:click="showChange(task)"
      )
    hr
    .inProgressHeadDiv.head(
      @drop="onDrop($event, Status.inProgress)",
      @dragenter.prevent,
      @dragover.prevent
    )
      .div_th.inProgress In progress
        p.numberOfTasks Number of tasks: {{ inProgress.length }}
      TaskCard(
        v-for="(task, index) in inProgress",
        :key="'inProgress_task-' + index",
        draggable="true",
        @dragstart="startDrag($event, task)",
        :task="task",
        v-on:click="showChange(task)"
      )
    hr
    .doneHeadDiv.head(
      @drop="onDrop($event, Status.done)",
      @dragenter.prevent,
      @dragover.prevent
    )
      .div_th.done Done
        p.numberOfTasks Number of tasks: {{ done.length }}
      TaskCard(
        v-for="(task, index) in done",
        :key="'done_task-' + index",
        draggable="true",
        @dragstart="startDrag($event, task)",
        :task="task",
        v-on:click="showChange(task)"
      )
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { mapActions, mapState, useStore } from "vuex";
import Status from "@/enums/StatusEnum";
import TaskCard from "@/components/TaskCard.vue";
import { taskInterface } from "@/interfaces/task.interface";
import TaskDetailsModal from "@/components/TaskDetailsModal.vue";

export default defineComponent({
  name: "Kanban",
  components: {
    TaskCard,
    TaskDetailsModal,
  },
  data() {
    return {
      Status,
      isShowChange: false,
      currentTask: {} as taskInterface,
    };
  },
  setup() {
    const store = useStore();

    const tasks = computed(() => store.state.tasks);

    const startDrag = (event, task) => {
      console.log(task.id);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("taskStatus", task.status);
      event.dataTransfer.setData("taskId", task.id);
    };

    const onDrop = (event, status) => {
      console.log(status);
      const taskId = event.dataTransfer.getData("taskId");
      const taskStatus = event.dataTransfer.getData("taskStatus");
      const task = tasks.value.find(
        (task) => task.status == taskStatus && task.id == taskId
      );
      if (task.status !== Status.done) {
        let taskData = {
          status: status,
          id: task.id,
        };
        store.dispatch("CHANGE_STATUS", taskData);
        // task.status = status;
      } else {
        alert("You done this task, y cant make another status for this");
      }
    };
    return {
      startDrag,
      onDrop,
    };
  },
  computed: {
    ...mapState(["tasks"]),
    toDoTasks: function () {
      return this.tasks.filter((t) => t.status == Status.toDo);
    },
    inProgress: function () {
      return this.tasks.filter((t) => t.status == Status.inProgress);
    },
    done: function () {
      return this.tasks.filter((t) => t.status == Status.done);
    },
  },
  methods: {
    ...mapActions(["CHANGE_STATUS"]),
    showChange(task) {
      this.currentTask = task;
      this.isShowChange = true;
    },
    removeEditTask() {
      this.isShowChange = false;
    },
  },
});
</script>
<style scoped>
.table {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
}
.toDo,
.inProgress,
.done {
  font-size: 17px;
  font-weight: bold;
}
.inProgressHeadDiv,
.doneHeadDiv {
  margin-top: 20px;
}
.div_th {
  background: #ffe4b5;
  color: #000;
  padding: 10px 40px;
  border-style: solid;
  border-width: 0 4px 4px 0;
  border-color: white;
}
hr {
  margin-top: 16px;
  border-top: 5px dotted #ffe4b5;
  border-bottom: none;
  border-right: none;
  border-left: none;
}
.head {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.numberOfTasks {
  font-size: 13px;
  font-weight: normal;
}
.done {
  border-radius: 0 0 0 10px;
}
.toDo {
  border-radius: 10px 0 0 0;
}
table {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  border-collapse: collapse;
  text-align: center;
}
th,
td:first-child {
  background: #ffe4b5;
  color: #000;
  padding: 10px 40px;
}
th,
td {
  border-style: solid;
  border-width: 0 4px 4px 0;
  border-color: white;
}
td {
  background: #ffefd5;
}
th:first-child,
td:first-child {
  text-align: left;
}
@media only screen and (max-width: 768px) {
  th,
  td:first-child {
    padding: 10px 20px;
  }
  .kanban-tab {
    width: 80%;
  }
}
@media only screen and (max-width: 640px) {
  .div_th {
    padding: 10px 20px;
  }
  .taskCard {
    padding: 12px 20px;
  }
}
@media only screen and (max-width: 480px) {
  .kanban-tab {
    padding: 20px;
  }
  .div_th {
    padding: 5px 15px;
    font-size: 16px;
  }
  .taskCard {
    padding: 8.2px 20px;
  }
  .taskCard {
    font-size: 15px;
  }
}
</style>
