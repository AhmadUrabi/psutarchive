module.exports = {
  root: true,
  plugins: ["prettier"],
  extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
  ],
};
