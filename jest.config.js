process.env.REACT_APP_NODE_ENV =
  process.env.REACT_APP_NODE_ENVNODE_ENV || 'test';
process.env.REACT_APP_DASHBOARD = process.env.REACT_APP_DASHBOARD || 'awfy';

module.exports = {
  // The root of your source code, typically `/src`
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['_tests_', 'index'],
  // Paths to modules that run some code to configure or set up the testing environment before each test
  testMatch: ['<rootDir>/_tests_/**/*.{js,jsx}'],
  // Test environment that simulates a browser (using jsdom)
  testEnvironment: 'jsdom',

  // Jest transformations -- this adds support for TypeScript and ES6+ syntax
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Use babel-jest for JavaScript files
  },

  // Module file extensions for importing
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

  // Mock CSS/SCSS modules
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(css)$': 'identity-obj-proxy',
  },
  resetMocks: true,
};
