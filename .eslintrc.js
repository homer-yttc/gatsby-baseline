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
    'arrow-body-style': 0,
    'arrow-parens': ['error', 'always'],
    camelcase: 0,
    'comma-dangle': ['warn', 'only-multiline'],
    'default-case': 0,
    'implicit-arrow-linebreak': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    indent: ['warn'],
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
    'no-trailing-spaces': ['warn'],
    'no-console': ['error'],
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
    'react/jsx-indent': ['warn'],
    'react/jsx-filename-extension': 0,
    'react/jsx-tag-spacing': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-closing-tag-location': ['warn'],
    'react/require-default-props': ['warn'],
    'react/jsx-wrap-multilines': 0,
    'react/jsx-props-no-spreading': [
      'warn',
      {
        html: 'enforce',
        custom: 'ignore',
        exceptions: ['img'],
      },
    ],
    'react/prop-types': ['warn', { ignore: ['children', 'props'] }],
    semi: ['error', 'never'],
    'spaced-comment': 0,
    strict: 0,
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
