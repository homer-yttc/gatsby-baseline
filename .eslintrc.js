const path = require('path')

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
  plugins: ['graphql'],
  env: {
    browser: true,
    node: true,
    es6: true,
    amd: true,
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    camelcase: 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'never',
        exports: 'only-multiline',
        functions: 'never',
      },
    ],
    'default-case': 0,
    'implicit-arrow-linebreak': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      'warn',
      {
        vars: 'local',
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
      },
    ],
    'operator-linebreak': [2, 'after'],
    'object-curly-spacing': ['warn'],
    quotes: ['warn', 'single'],
    'react/jsx-filename-extension': 0,
    'react/jsx-tag-spacing': 0,
    'react/jsx-one-expression-per-line': 0,
    semi: ['error', 'never'],
    'spaced-comment': 0,
    strict: 0,
    'react/jsx-wrap-multilines': 0,
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
      },
    ],
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
