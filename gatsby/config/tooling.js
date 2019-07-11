const { srcPaths } = require("../../site-settings")

module.exports = [
  `gatsby-plugin-eslint`,
  `gatsby-plugin-catch-links`,
  {
    resolve: "gatsby-plugin-root-import",
    options: srcPaths,
  },
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
      path: `${process.cwd()}/src/images`,
    },
  },
  {
    resolve: "gatsby-plugin-extract-schema",
    options: {
      dest: `${process.cwd()}/graphql/schema.json`,
    },
  },
]
