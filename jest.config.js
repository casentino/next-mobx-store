const { defaults: tsjPreset } = require("ts-jest/presets");
/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  rootDir: ".",
  moduleDirectories: ["node_modules", "<rootDir>/", ".yarn"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "ts", "tsx"],
  transform: {
    ...tsjPreset.transform,
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
};
