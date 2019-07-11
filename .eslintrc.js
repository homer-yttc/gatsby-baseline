const path = require('path');

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
  'rules': {
    'strict': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-tag-spacing': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'quotes': ['error', 'backtick'],
    'graphql/template-strings': [
      'error',
      {
        env: 'relay',
        schemaJsonFilepath: path.resolve(__dirname, 'graphql/schema.json'),
        tagName: 'graphql',
      },
    ],
  },
};
