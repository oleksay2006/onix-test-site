// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
// };
import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  automock: true,
  moduleFileExtensions: ['vue', "js", "jsx", "ts", "tsx", "json", "node"],
  transform: {
    '.*\\.(vue)$': "<rootDir>/node_modules/@vue/vue3-jest"
  }
}
export default config