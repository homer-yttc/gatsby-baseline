module.exports = [
  {
    resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    options: {
      openAnalyzer: false,
    },
  },
  {
    resolve: 'gatsby-plugin-page-creator',
    options: {
      path: `${process.cwd()}/src/components/pages`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${process.cwd()}/src/assets/images`,
    },
  },
  {
    resolve: 'gatsby-plugin-extract-schema',
    options: {
      dest: `${process.cwd()}/graphql/schema.json`,
    },
  },
]
