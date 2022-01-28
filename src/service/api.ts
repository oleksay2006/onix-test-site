import axios from "axios";

const instance = axios.create({
  baseURL: "https://shy-glitter-2150.getsandbox.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
