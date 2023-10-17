/** @type {import("ts-jest").JestConfigWithTsJest} */
const { defaults: tsjPreset } = require('ts-jest/presets');
module.exports = {
	preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  rootDir: './',    
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/.yarn'],
  moduleFileExtensions: ['js','ts', 'tsx'],
  coverageReporters: ['json', 'html'],
	transform: {
    ...tsjPreset.transform,
    // '^.+\\.jsx?$': "../../wrapper.js",
     "^.+\\.[t|j]sx?$": "babel-jest"
 }, 
  projects: [
    {
      testMatch: [
        './**/*.test.ts'
      ],
      testPathIgnorePatterns: ['./dist', '.turbo']
    }
  ]
};
