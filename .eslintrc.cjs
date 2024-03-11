/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  globals: {
    FB: 'readonly', // добавьте эту строку
    __VUE_OPTIONS_API__: 'readonly',
    __VUE_PROD_DEVTOOLS__: 'readonly',
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'readonly'
  }
}
