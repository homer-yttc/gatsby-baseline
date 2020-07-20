const { trimEnd } = require('lodash')
const { CWD, DRUPAL_CONTENT_API, GRAPHQL_CONTENT_API, WORDPRESS_CONTENT_API } = require('../env')

const dataSources = [
  {
    resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    options: {
      openAnalyzer: false,
    },
  },
  'gatsby-transformer-json',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'data',
      path: `${CWD}/data/content`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${CWD}/data/content/images`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${CWD}/src/assets/images`,
    },
  },
]

if (DRUPAL_CONTENT_API) {
  dataSources.push({
    resolve: 'gatsby-source-drupal',
    options: {
      baseUrl: trimEnd(DRUPAL_CONTENT_API, '/'),
      apiBase: 'jsonapi', // optional, defaults to `jsonapi`
      // basicAuth: {
      //   username: process.env.BASIC_AUTH_USERNAME,
      //   password: process.env.BASIC_AUTH_PASSWORD,
      // },
    },
  })
}

if (WORDPRESS_CONTENT_API) {
  dataSources.push({
    resolve: `gatsby-source-wordpress-experimental`,
    options: {
      /*
       * The full URL of the WordPress site's GraphQL API.
       * Example : 'https://www.example-site.com/graphql'
       */
      url: WORDPRESS_CONTENT_API,
    },
  })
}

if (GRAPHQL_CONTENT_API) {
  dataSources.push({
    resolve: 'gatsby-source-graphql',
    options: {
      typeName: 'GraphApi',
      fieldName: 'graphapi',
      url: GRAPHQL_CONTENT_API,
      // A `fetch`-compatible API to use when making requests.
      fetch: (uri, options = {}) =>
        // Chance to sign the headers as needed
        fetch(uri, {
          ...options,
          headers: options.headers,
        }),
    },
  })
}

module.exports = dataSources
