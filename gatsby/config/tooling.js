
module.exports = [
  `gatsby-plugin-eslint`,
  `gatsby-plugin-catch-links`,
  {
    resolve: `gatsby-plugin-webpack-bundle-analyzer`,
    options: {
      openAnalyzer: false,
    },
  },
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: `${process.cwd()}/src/components/pages`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${process.cwd()}/src/assets/images`,
    },
  },
  {
    resolve: `gatsby-plugin-extract-schema`,
    options: {
      dest: `${process.cwd()}/graphql/schema.json`,
    },
  },
  /*
  If you require legacy browser support, you'll need to vet out which filters
  you need to include from: https://polyfill.io/v3/url-builder/
   */
  // {
  //   resolve: `gatsby-plugin-polyfill-io`,
  //   options: {
  //     features: [
  //      `es2015`,
  //      //`es2016`,
  //      //`es2017`,
  //      //`IntersectionObserver`, // Essential for react-intersection-observer support
  //     ],
  //   },
  // },
]
