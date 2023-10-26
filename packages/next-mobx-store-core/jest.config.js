
/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  ...require('../../jest.config.js'),
  testEnvironment: 'node',
  displayName: '@next-mobx-store/core',
  testMatch: ['./**/*.test.(ts|tsx)'],
  moduleDirectories: ['../../.yarn', '../../'],  
  testPathIgnorePatterns: ['./dist', './.turbo'],
  setupFilesAfterEnv: null,

}
