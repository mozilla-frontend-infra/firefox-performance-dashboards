module.exports = {
  root: true,
  env: {
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
  overrides: [
    {
      // JavaScript linting
      files: ['src/**/*.js', 'src/**/*.jsx', 'webpack/**/*.js'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
  ],
};
