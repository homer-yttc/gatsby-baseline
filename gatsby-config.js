// Load current env/local .env files. Details on usage: https://github.com/kerimdzhanov/dotenv-flow#files-under-version-control
require('dotenv-flow').config()

const { siteMetadata } = require('./site-settings')
const plugins = require('./gatsby/config')
const ENVS = require('./gatsby/env')
const { logBuild } = require('./gatsby/logging')

logBuild()

const config = {
  siteMetadata,
  plugins,
}

if (ENVS.GHPAGES === '1') {
  Object.assign(config, {
    pathPrefix: `/gatsby-baseline`,
  })
}

module.exports = config
