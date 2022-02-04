// const sum = require('./sum');
import type * as Sum from "./sum"
const { sum } = jest.requireActual<typeof Sum>("./sum")
import axios from "axios";
// import {ApiService} from '@/service/api'
// function sum(a: number, b: number) {
//   return a * b;
// }
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(2);
});

// const instance = axios.create({
//   baseURL: "https://shy-glitter-2150.getsandbox.com/",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   timeout: 1000,
// });

// instance.interceptors.response.use((response) => {
//   return response.data;
// });
// test('hello pesponse from api', () => {
//   instance.get('hello')
//     .then(function (response) {
//       expect(response).toBe('hello');
//     })
// });
export { }