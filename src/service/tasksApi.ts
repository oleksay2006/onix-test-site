import instance from "./api";
import { taskInterface } from "@/interfaces/task.interface";
import Status from "@/enums/StatusEnum";

export function getTasks() {
  return instance.get("tasks");
  // .then(function (response) {
  //   // обробка успішного запиту
  //   console.log(response.data);
  // })
  // .catch(function (error) {
  //   // обробка помилки
  //   console.log(error);
  // });;
}
export function postTask(payload: taskInterface) {
  return instance.post("tasks", payload);
}
export function deleteTask(id: number) {
  return instance.delete(`tasks/${id}`);
}
export function updateTask(changedTask: taskInterface) {
  return instance.put(`tasks/${changedTask.customData.id}`, changedTask);
}
export function removeAnimation(id: number) {
  return instance.put(`tasks/${id}`);
}
export function changeStatus(taskData: { status: Status, id: number }) {
  return instance.put(`tasks/${taskData.id}`, taskData);
}