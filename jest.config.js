module.exports = {
  verbose: true,
  testEnvironment: 'node',
  testMatch: ['**/__tests__/*.js?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  setupFilesAfterEnv: ['./setupTests.js'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
