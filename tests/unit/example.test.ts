// import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";
import type * as Sum from "./sum"
const { sum } = jest.requireActual<typeof Sum>("./sum")
import axios from "axios";
// const sum = require('./sum');

// function sum(a: number, b: number) {
//   return a * b;
// }
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(2);
});
export { }