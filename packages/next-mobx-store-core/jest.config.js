/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  ...require("../../jest.config.js"),
  testEnvironment: "node",
  displayName: "@next-mobx-store/core",
  testMatch: ["./**/*.test.(ts|tsx)"],
  moduleDirectories: ["../../node_modules", __dirname, "../../.yarn"],
  testPathIgnorePatterns: ["./dist", "./.turbo"],
  setupFilesAfterEnv: null,
};
