const { FlatCompat } = require('@eslint/eslintrc');
const nx = require('@nx/eslint-plugin');
const compat = new FlatCompat({
  baseDirectory: __dirname
});

module.exports = [
  ...compat.config({
    extends: ['plugin:@nx/angular', 'plugin:@nx/angular-template']
  }),
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  },
];