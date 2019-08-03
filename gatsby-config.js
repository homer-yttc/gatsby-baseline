const { siteMetadata } = require('./site-settings')
const plugins = require('./gatsby/config')
const { GHPAGES } = require('./gatsby/env')

// eslint-disable-next-line no-console
console.log(`ENV: '${process.env.CONTEXT || process.env.NODE_ENV}' on ${siteMetadata.siteUrl}`)

const config = {
  siteMetadata,
  plugins,
}

if (GHPAGES === '1') {
  Object.assign(config, {
    pathPrefix: `/gatsby-baseline`,
  })
}

module.exports = config
