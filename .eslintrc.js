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
    'strict': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-tag-spacing': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'operator-linebreak': [2, 'after'],
    'semi': ['error', 'never'],
    'react/jsx-wrap-multilines': ['error', {
      'declaration': 'parens',
      'assignment': 'parens',
      'return': 'ignore',
      'arrow': 'parens',
      'condition': 'ignore',
      'logical': 'ignore',
      'prop': 'ignore',
    }],
    'arrow-parens': ['error','always'],
    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'never',
      'exports': 'only-multiline',
      'functions': 'never',
    }],
    'quotes': ['warn', 'backtick'],
    'implicit-arrow-linebreak': 0,
    'object-curly-newline': ['error', { 'multiline': true, "consistent": true }],
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
