module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue", "prettier", "import"],
  rules: {
    "no-console": "warn",
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        trailingComma: "all",
        tabWidth: 2,
        semi: true,
        singleQuote: false,
        bracketSpacing: true,
        arrowParens: "always",
        endOfLine: "auto",
      },
    ],
    "no-unused-vars": [
      "warn",
      {
        args: "after-used",
        ignoreRestSiblings: false,
        argsIgnorePattern: "^_.*?$",
      },
    ],
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "@/components/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/containers/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/mixins/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/repositories/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/constants/**",
            group: "external",
            position: "before",
          },
        ],
        "newlines-between": "always-and-inside-groups",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
    ],
  },
};