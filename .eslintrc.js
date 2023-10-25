module.exports = {
  root: true,
  extends: [
    "@nuxt/eslint-config",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    eqeqeq: "error",
    "no-console": "warn",
    "prettier/prettier": "error",
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  ignorePatterns: [
    "node_modules",
    "build",
    "dist",
    "public",
    ".nuxt",
    ".vscode",
  ],
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
  ],
};
