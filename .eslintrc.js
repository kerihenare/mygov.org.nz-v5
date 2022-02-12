'use strict';

module.exports = {
  env: {
    browser: true,
    es2021: true
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:security/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'plugin:prettier/recommended'
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  plugins: [
    '@typescript-eslint',
    'import',
    'prettier',
    'promise',
    'security',
    'react',
    'react-hooks'
  ],

  rules: {
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: [
          'signature',
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-abstract-field',
          'protected-abstract-field',
          'private-abstract-field',
          'public-constructor',
          'protected-constructor',
          'private-constructor',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-abstract-method',
          'protected-abstract-method',
          'private-abstract-method'
        ]
      }
    ],
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'camelcase': ['warn'],
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        'alphabetize': {
          caseInsensitive: true,
          order: 'asc'
        },
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          ['sibling', 'index']
        ],
        'newlines-between': 'always',
        'pathGroupsExcludedImportTypes': ['builtin', 'external']
      }
    ],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'warn',
    'no-useless-escape': 'warn',
    'node/no-extraneous-import': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'react/no-unescaped-entities': 'warn',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'security/detect-non-literal-fs-filename': 'off',
    'sort-keys': [
      'warn',
      'asc',
      {
        caseSensitive: false,
        minKeys: 2,
        natural: false
      }
    ]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    },
    'linkComponents': { linkAttribute: 'to', name: 'Link' },
    'react': {
      version: 'detect'
    }
  }
};
