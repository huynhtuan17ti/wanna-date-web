module.exports = {
    root: true,

    env: {
      es2021: true,
      'vue/setup-compiler-macros': true,
      node: true
    },

    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier',
        './src/.eslintrc-auto-import.json',
    ],

    parserOptions: {
        ecmaVersion: 2020,
    },

    rules: {
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always'
        }
      ],
      '@typescript-eslint/camelcase': 'off',
      'vue/multi-word-component-names': 'off',
      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true
        }
      ],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    },

    'extends': [
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
      '@vue/typescript/recommended',
      '@vue/prettier',
      '@vue/eslint-config-typescript',
      '@vue/eslint-config-prettier',
      './src/.eslintrc-auto-import.json',
      'plugin:vue/vue3-essential',
      'plugin:prettier/recommended'
    ]
}
