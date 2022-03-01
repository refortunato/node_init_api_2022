/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  // Indicates which provider should be used to instrument code for coverage
  // coverageProvider: "babel",
  moduleNameMapper: {
    '@/(.+)': '<rootDir>/src/$1',
    '@/tests(.+)': '<rootDir>/tests/$1',
  },
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests'
  ],
  transform: {
    '\\.ts': 'ts-jest'
  }
};
