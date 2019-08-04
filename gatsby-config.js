/* eslint-disable no-console */

// Load current env/local .env files. Details on usage: https://github.com/kerimdzhanov/dotenv-flow#files-under-version-control
require('dotenv-flow').config()

const { once } = require('lodash')
const { siteMetadata } = require('./site-settings')
const plugins = require('./gatsby/config')
const ENVS = require('./gatsby/env')

once(() => {
  console.log('=================================')
  console.log(`ENV: ${ENVS.NODE_ENV}`)
  console.log(`SITE: ${ENVS.SITE_URL}`)
  console.log('=================================')
})()

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
