/** @type {import('ts-jest').JestConfigWithTsJest} */

const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
	preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  rootDir: './',    
  collectCoverage: true,
  coverrageDirectory: '<rootDir>/coverage',
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/.yarn'],
  moduleFileExtensions: ['ts', 'tsx'],
  coverageReporters: ['json', 'html'],
  projects: [{
    testEnvironment: 'jsdom',
    testMatch: [
      '<rootDir>/packages/**/__test__/*.test.ts',
      '<rootDir>/packages/**/__test__/*.test.tsx'
    ],
    testPathIgnorePatterns: ['<rootDir>/packages/**/dist']
  }],
	transform: {
		...tsjPreset.transform
	},
};
