<template lang="pug">
.kanban-tab.tab.tab-2
  table
    tr(@drop="onDrop($event, 'to-do')", @dragenter.prevent, @dragover.prevent)
      th.toDo To Do
      td.taskCard(
        v-for="(task, index) in tasks",
        v-show="task.status == Status.toDo",
        draggable="true",
        @dragstart="startDrag($event, task)"
      )
        h4 {{ task.title }}
        p.time {{ task.time }}
    tr(
      @drop="onDrop($event, 'in-progress')",
      @dragenter.prevent,
      @dragover.prevent
    )
      th In progress
      td.taskCard(
        v-for="(task, index) in tasks",
        v-show="task.status == Status.inProgress",
        draggable="true",
        @dragstart="startDrag($event, task)"
      )
        h4 {{ task.title }}
        p.time {{ task.time }}

    tr(@drop="onDrop($event, 'done')", @dragenter.prevent, @dragover.prevent)
      th.done Done
      td.taskCard(
        v-for="(task, index) in tasks",
        v-show="task.status == Status.done",
        draggable="true",
        @dragstart="startDrag($event, task)"
      )
        h4 {{ task.title }}
        p.time {{ task.time }}
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { mapState, useStore } from "vuex";
import Status from "@/enums/StatusEnum";

export default defineComponent({
  name: "Kanban",
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
      if (task.status !== "done") {
        task.status = status;
      } else {
        alert("You done this task, y cant make another status for this");
      }
    };
    return {
      startDrag,
      onDrop,
    };
  },
  enums: {
    Status,
  },
  computed: {
    ...mapState(["tasks"]),
  },
});
</script>
<style scoped>
.taskCard {
  padding: 5px 40px;
  border-radius: 10px;
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
</style>