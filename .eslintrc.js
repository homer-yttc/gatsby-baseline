const path = require('path')

module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    'graphql',
  ],
  'env': {
    'browser': true,
    'node': true,
  },
  'rules': {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'implicit-arrow-linebreak': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'no-unused-expressions': 0,
    'operator-linebreak': [2, 'after'],
    'react/jsx-filename-extension': 0,
    'react/jsx-tag-spacing': 0,
    'react/jsx-one-expression-per-line': 0,
    'semi': ['error', 'never'],
    'spaced-comment': 0,
    'strict': 0,
    'react/jsx-wrap-multilines': ['error', {
      'declaration': 'parens',
      'assignment': 'parens',
      'return': 'ignore',
      'arrow': 'parens',
      'condition': 'ignore',
      'logical': 'ignore',
      'prop': 'ignore',
    }],
    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'never',
      'exports': 'only-multiline',
      'functions': 'never',
    }],
    'quotes': ['warn', 'backtick'],
    'object-curly-newline': ['error', {
      'multiline': true,
      'consistent': true,
    }],
    'graphql/template-strings': [
      'error',
      {
        env: 'relay',
        schemaJsonFilepath: path.resolve(__dirname, 'graphql/schema.json'),
        tagName: 'graphql',
      },
    ],
  },
}
