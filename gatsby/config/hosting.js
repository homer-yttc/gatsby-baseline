const { NETLIFY_ENV } = require('../env')
const {
  monitoring: { gtmId },
} = require('../../site-settings')

const hosting = [
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // 'gatsby-plugin-offline',
  {
    resolve: 'gatsby-plugin-prefetch-google-fonts',
    options: {
      fonts: [
        {
          family: 'Open Sans',
          variants: ['300', '300i', '400', '400i', '600'],
          subsets: ['latin'],
        },
      ],
    },
  },
]

// Include GTM if available.
if (gtmId) {
  hosting.push({
    resolve: 'gatsby-plugin-google-tagmanager',
    options: {
      id: gtmId,

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      // Defaults to null
      defaultDataLayer: { platform: 'gatsby' },

      // Specify optional GTM environment details.
      // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
      // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
      // dataLayerName: 'YOUR_DATA_LAYER_NAME',
    },
  })
}

if (NETLIFY_ENV) {
  hosting.push({
    resolve: 'gatsby-plugin-netlify',
    options: {
      // option to add more headers. 'Link' headers are transformed by the below criteria
      headers: {
        '/': ['Basic-Auth: therefore:access'],
        '/*': ['Basic-Auth: therefore:access'],
      },
      // option to add headers for all pages. 'Link' headers are transformed by the below criteria
      allPageHeaders: [],
      // mergeSecurityHeaders: true, // boolean to turn off the default security headers
      // mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
      // mergeCachingHeaders: true, // boolean to turn off the default caching headers
      // optional transform for manipulating headers under each path (e.g.sorting), etc.
      // transformHeaders: (headers, path) => headers,
      // boolean to turn off automatic creation of redirect rules for client only paths
      // generateMatchPathRewrites: true,
    },
  })
}

module.exports = hosting
