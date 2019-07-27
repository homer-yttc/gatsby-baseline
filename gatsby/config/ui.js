const postcssImport = require('postcss-import')
const postcssExtend = require('postcss-extend')
const postcssNesting = require('postcss-nesting')
const postcssPxToRem = require('postcss-pxtorem')
const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')
const {
  srcPaths,
  manifest: { theme_color },
} = require('../../site-settings')

module.exports = [
  'gatsby-plugin-fastclick',
  'gatsby-plugin-transition-link',
  {
    resolve: 'gatsby-plugin-sass',
    options: {
      includePaths: [srcPaths.styles],
      useResolveUrlLoader: {
        options: {
          sourceMap: process.env.NODE_ENV === 'development', //default is false
        },
      },
    },
  },
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
        cssnano(),
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-prefetch-google-fonts',
    options: {
      fonts: [
        {
          family: 'Oswald',
          subsets: ['latin'],
        },
        {
          family: 'Open Sans',
          variants: ['400', '700'],
        },
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-nprogress',
    options: {
      // Setting a color is optional.
      color: theme_color,
      // Disable the loading spinner.
      showSpinner: false,
    },
  },
]
