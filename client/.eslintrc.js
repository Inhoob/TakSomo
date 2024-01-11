module.exports = {
  root: true,
  plugins: ['import'],
  extends: ['@react-native'],
  rules: {
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/no-unstable-nested-components': 'off',
  },
};
