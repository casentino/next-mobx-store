const { defaults: tsjPreset } = require('ts-jest/presets')
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
  testEnvironment: 'node',
  projects: ['<rootDir>', '<rootDir>/packages/*'],
	transform: {
		...tsjPreset.transform
	},
};