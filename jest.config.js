process.env.REACT_APP_NODE_ENV = process.env.REACT_APP_NODE_ENV || 'test';
process.env.REACT_APP_DASHBOARD = process.env.REACT_APP_DASHBOARD || 'awfy';

module.exports = {
  // The root of your source code, typically `/src`
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['__tests__', 'index'],

  // Test environment that simulates a browser (using jsdom)
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/__tests__/mocks/'],

  // Jest transformations -- this adds support for TypeScript and ES6+ syntax
  transform: {
    '^.+\\.(j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(taskcluster-client-web|data-uri-to-buffer|fetch-blob|formdata-polyfill|node-fetch)/)',
  ],

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
