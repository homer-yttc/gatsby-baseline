const { siteMetadata } = require(`./site-settings`)
const plugins = require(`./gatsby/config`)
const { GHPAGES } = process.env

const config = {
  siteMetadata,
  plugins
}

if (GHPAGES === `1`) {
  Object.assign(config, {
    pathPrefix: `/gatsby-baseline`
  })
}

module.exports = config
