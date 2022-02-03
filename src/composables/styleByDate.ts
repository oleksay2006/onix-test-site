import { computed } from "vue";
import { taskInterface } from "@/interfaces/task.interface";

export function styleByDate(task) {
  const isOutdated = computed(() => {
    const x: Date = new Date(task.value.customData.time);
    const y: Date = new Date();
    y.setHours(0, 0, 0, 0);
    return x.getTime() < y.getTime();
  });
  const isSoon = computed(() => {
    const x = new Date(task.value.customData.time);
    const y = new Date();
    y.setHours(0, 0, 0, 0);
    x.setHours(0, 0, 0, 0);
    return x.getTime() == y.getTime();
  });
  const isFuture = computed(() => {
    const x = new Date(task.value.customData.time);
    const y = new Date();
    return x.getTime() > y.getTime();
  });
  return {
    isOutdated,
    isSoon,
    isFuture,
  };
}
