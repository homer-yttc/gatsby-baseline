const {
  manifest,
  siteMetadata: { siteUrl },
} = require('../../site-settings')

module.exports = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: manifest,
  },
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      resolveEnv: () => process.env.NETLIFY_ENV,
      env: {
        production: {
          policy: [{ userAgent: '*' }],
        },
        'branch-deploy': {
          policy: [{ userAgent: '*', disallow: ['/'] }],
          sitemap: null,
          host: null,
        },
        'deploy-preview': {
          policy: [{ userAgent: '*', disallow: ['/'] }],
          sitemap: null,
          host: null,
        },
      },
    },
  },
  {
    resolve: 'gatsby-plugin-canonical-urls',
    options: {
      siteUrl,
    },
  },
]
