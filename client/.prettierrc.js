module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  importOrderSeparation: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@interfaces/(.*)$',
    '^@screens/(.*)$',
    '^@components/(.*)$',
    '^@navigation/(.*)$',
    '^@stores/(.*)$',
    '^@apis/(.*)$',
    '^@utils/(.*)$',
    '^@utils/(.*)$',
    '^@styles/(.*)$',
    '^[./]',
  ],
};