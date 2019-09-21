const { envs, NODE_ENV } = require('../env')
const { srcPaths } = require('../../site-settings')

module.exports = [
  'gatsby-plugin-eslint',
  'gatsby-plugin-catch-links',
  {
    resolve: 'gatsby-plugin-sass',
    options: {
      includePaths: [srcPaths.styles],
      useResolveUrlLoader: {
        options: {
          sourceMap: NODE_ENV === envs.development, //default is false
        },
      },
    },
  },
  {
    resolve: '@danbruegge/gatsby-plugin-stylelint',
    options: {
      files: ['**/*.scss'],
      failOnError: false,
      // lintDirtyModulesOnly: true,
    },
  },
  /*
  If you require legacy browser support, you'll need to vet out which filters
  you need to include from: https://polyfill.io/v3/url-builder/
   */
  // {
  //   resolve: 'gatsby-plugin-polyfill-io',
  //   options: {
  //     features: [
  //      'es2015',
  //      //'es2016',
  //      //'es2017',
  //      //'IntersectionObserver', // Essential for react-intersection-observer support
  //     ],
  //   },
  // },
]
