module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-new": 0,
    "array-callback-return": 0,
    quotes: ["error", "double"],
  },
};
