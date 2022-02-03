import { computed } from "vue";
import { useStore } from "vuex";
import Status from "@/enums/StatusEnum";
import { taskInterface } from "@/interfaces/task.interface";

export function dragAndDrop() {
  const store = useStore();
  const tasks = computed(() => store.state.tasksModule.tasks);

  const startDrag = (event, task: taskInterface) => {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("taskStatus", task.customData.status);
    event.dataTransfer.setData("taskId", task.customData.id);
  };

  const onDrop = (event, status: Status) => {
    const taskId = event.dataTransfer.getData("taskId");
    const taskStatus = event.dataTransfer.getData("taskStatus");
    const task = tasks.value.find(
      (task) =>
        task.customData.status == taskStatus && task.customData.id == taskId
    );
    if (task.customData.status !== Status.done) {
      const taskData = {
        status: status,
        id: task.customData.id,
      };
      store.dispatch("tasksModule/CHANGE_STATUS", taskData);
    } else {
      alert("You done this task, y cant make another status for this");
    }
  };
  return {
    startDrag,
    onDrop,
    tasks,
  };
}
