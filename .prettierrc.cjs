module.exports = {
  semi: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^(^react$|@react|react|^recoil$)', '^@mui/(.*)$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderGroupNamespaceSpecifiers: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
