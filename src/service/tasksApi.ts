import { ApiService } from "./api";
import { taskInterface } from "@/interfaces/task.interface";
import Status from "@/enums/StatusEnum";

export const tasksApi = {
  getTasks() {
    return ApiService.get("tasks");
  },
  postTask(payload: taskInterface) {
    return ApiService.post("tasks", payload);
  },
  deleteTask(id: number) {
    return ApiService.delete(`tasks/${id}`);
  },
  updateTask(changedTask: taskInterface) {
    return ApiService.put(`tasks/${changedTask.customData.id}`, changedTask);
  },
  // export function removeAnimation(id: number) {
  //   return instance.put(`tasks/${id}`);
  // }
  changeStatus(taskData: { status: Status; id: number }) {
    return ApiService.put(`tasks/${taskData.id}`, taskData);
  },
};
