import { computed } from "vue";
import { taskInterface } from "@/interfaces/task.interface";

export function styleByDate(task) {
  const isOutdated = computed(() => {
    const x = new Date(task.value.customData.time);
    const y = new Date();
    return (y.getFullYear() == x.getFullYear() &&
      y.getDate() > x.getDate() &&
      y.getMonth() >= x.getMonth()) ||
      y.getFullYear() > x.getFullYear()
      ? true
      : false;
  });
  const isSoon = computed(() => {
    const x = new Date(task.value.customData.time);
    const y = new Date();
    return x.getFullYear() === y.getFullYear() &&
      x.getDate() === y.getDate() &&
      x.getMonth() === y.getMonth()
      ? true
      : false;
  });
  const isFuture = computed(() => {
    const x = new Date(task.value.customData.time);
    const y = new Date();
    return x > y ? true : false;
  });
  return {
    isOutdated,
    isSoon,
    isFuture,
  };
}
