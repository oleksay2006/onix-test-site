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
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", 'vue', "json", "node"],
  transform: {
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  }
}
export default config