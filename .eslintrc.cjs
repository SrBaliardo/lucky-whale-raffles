module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: [
    'react',
    'import-helpers',
    'react-refresh',
    'prettier',
    'eslint-plugin-import-helpers',
  ],
  rules: {
    'import-helpers/order-imports': {
      allowConstantExport: 'true',

      newlinesBetween: 'always',
      groups: [
        '/^node:*/',
        'module',
        '/^@\\//',
        ['parent', 'sibling', 'index'],
      ],
      alphabetize: {
        order: 'asc',
        ignoreCase: true,
      },
    },
  },
};
