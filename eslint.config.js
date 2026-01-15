const globals = require("globals");
const js = require("@eslint/js");
const reactPlugin = require("eslint-plugin-react");
const importPlugin = require("eslint-plugin-import");
const jestPlugin = require("eslint-plugin-jest");
const prettierConfig = require("eslint-config-prettier");
const babelParser = require("@babel/eslint-parser");

module.exports = [
  // Global ignores
  {
    ignores: ["coverage/**", "build/**"],
  },
  // Base JavaScript config
  js.configs.recommended,

  // Main configuration for all JavaScript files
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2024,
        ...globals.node,
        AVAILABLE_STAGING_LOCALES: true,
      },
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    },

    plugins: {
      react: reactPlugin,
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
        },
      },
      react: {
        version: "detect",
      },
    },
    rules: {
      // ESLint recommended rules (core rules)
      "no-console": "off",
      "no-extra-parens": "off",
      "no-extra-semi": "error",
      "no-inner-declarations": "error",
      "no-template-curly-in-string": "error",
      // React plugin recommended rules
      ...reactPlugin.configs.recommended.rules,
      // React JSX runtime rules
      ...reactPlugin.configs["jsx-runtime"].rules,
      // Custom overrides
      "no-unused-vars": "off",
      "react/prop-types": "off",
      // Prettier rules (must be last to override conflicting formatting rules)
      ...prettierConfig.rules,
    },
  },

  // Configuration for test files
  {
    files: [
      "**/__tests__/**/*.js",
      "**/__tests__/**/*.jsx",
      "**/*.test.js",
      "**/*.test.jsx",
    ],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      // Jest plugin recommended rules
      ...jestPlugin.configs.recommended.rules,
    },
  },
];
