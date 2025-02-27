module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['import', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jest/recommended',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  parser: '@babel/eslint-parser',
  overrides: [
    {
      // JavaScript linting
      files: ['src/**/*.js', 'src/**/*.jsx', 'webpack/**/*.js'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, // Enable JSX if you're using React
        },
      },
    },
  ],
  rules: {
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
  },
};
