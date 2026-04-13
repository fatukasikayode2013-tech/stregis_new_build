require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off", // Not needed in modern Next.js
    "react/self-closing-comp": "error",
  }
};