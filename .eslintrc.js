module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "next"],
  overrides: [],
  parserOptions: {
    project: "**/tsconfig.json",
  },
  rules: {
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "off",
  },
};
