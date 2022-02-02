import axios, { AxiosRequestConfig } from "axios";
import { taskInterface } from "@/interfaces/task.interface";

const instance = axios.create({
  baseURL: "https://shy-glitter-2150.getsandbox.com/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000,
});

instance.interceptors.response.use((response) => {
  return response.data;
});

export const ApiService = {
  get(resource: string, config?: AxiosRequestConfig) {
    return instance.get(resource, config);
  },
  post(resource: string, data: taskInterface, config?: AxiosRequestConfig) {
    return instance.post(resource, data, config);
  },
  put(resource: string, data: object, config?: AxiosRequestConfig) {
    return instance.put(resource, data, config);
  },
  delete(resource: string, config?: AxiosRequestConfig) {
    return instance.delete(resource, config);
  },
};
