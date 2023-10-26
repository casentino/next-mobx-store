
/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  ...require('../../jest.config.js'),
  displayName: '@next-mobx-store/hooks',
  testMatch: ['./**/*.test.(ts|tsx)'],
  moduleDirectories: ['../../.yarn', '../../'],  
  testPathIgnorePatterns: ['./dist', './.turbo'],
}
