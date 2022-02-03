import { ref } from "vue";
import { taskInterface } from "@/interfaces/task.interface";

export function modalsInfo() {
  const isShow = ref<boolean>(false);
  const isCalendar = ref<boolean>(true);
  const isShowChange = ref<boolean>(false);
  const currentTask = ref<taskInterface>({
    customData: {
      id: 0,
      title: "",
      text: "",
      time: "",
      isNew: false,
      status: "",
    },
    dates: "",
  });
  const removeEditTask = () => {
    isShowChange.value = false;
    isCalendar.value = true;
  };
  function showChange(task: taskInterface, event) {
    if (event.target.tagName !== "path" && event.target.tagName !== "svg") {
      currentTask.value = task;
      isCalendar.value = false;
      isShowChange.value = true;
    }
  }
  function showNew() {
    isShow.value = true;
  }
  function removeNew() {
    isShow.value = false;
  }
  return {
    isShow,
    isCalendar,
    isShowChange,
    currentTask,
    removeEditTask,
    showChange,
    showNew,
    removeNew,
  };
}
