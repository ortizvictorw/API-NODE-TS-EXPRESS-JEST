module.exports = {
    setupFiles: ['./jest.setup.js'],
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.ts'],
  };