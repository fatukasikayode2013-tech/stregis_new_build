require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@next/next/recommended"],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: 'detect' },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 2024,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
  ],
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "error",
  }
};
