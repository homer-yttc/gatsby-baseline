const { NETLIFY_ENV } = require('../env')

const hosting = [
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // 'gatsby-plugin-offline',
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
]

if (NETLIFY_ENV) {
  hosting.push({
    resolve: 'gatsby-plugin-netlify',
    options: {
      // option to add more headers. 'Link' headers are transformed by the below criteria
      headers: {
        // "/*": [
        //   "Basic-Auth: someuser:somepassword anotheruser:anotherpassword",
        // ],
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
