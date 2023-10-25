module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
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
