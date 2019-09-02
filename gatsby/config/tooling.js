const postcssImport = require('postcss-import')
const postcssExtend = require('postcss-extend')
const postcssNesting = require('postcss-nesting')
const postcssPxToRem = require('postcss-pxtorem')
const postcssPresetEnv = require('postcss-preset-env')
const cssNano = require('cssnano')
const { envs, NODE_ENV } = require('../env')
const { srcPaths } = require('../../site-settings')

module.exports = [
  'gatsby-plugin-eslint',
  'gatsby-plugin-catch-links',
  {
    resolve: 'gatsby-plugin-postcss',
    options: {
      postCssPlugins: [
        postcssImport(), // Add support for sass-like '@import'
        postcssExtend(), // Add support for sass-like '@extend'
        postcssNesting(), // Add support for sass-like nesting of rules
        postcssPxToRem({
          mediaQuery: false, // Ignore media queries
          minPixelValue: 0, // Minimal pixel value that will be processed
          // List of CSS properties that can be changed from px to rem; empty array means that all
          // CSS properties can change from px to rem
          propList: [],
          replace: true, // Replace pixels with rems
          rootValue: 16, // Root font-size
          selectorBlackList: ['html'], // Ignore pixels used for html
          unitPrecision: 4, // Round rem units to 4 digits
        }),
        postcssPresetEnv({ stage: 3 }),
        cssNano(),
      ],
    },
  },
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
