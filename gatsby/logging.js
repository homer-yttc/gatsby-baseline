/* eslint-disable no-console */
const { once, isObject, has, keys } = require('lodash')
const ENVS = require('./env')
const plugins = require('./config')

const logBuildEnvs = once(() => {
  console.log('=================================')
  console.log(`ENV: ${ENVS.NODE_ENV}`)
  console.log(`SITE: ${ENVS.SITE_URL}`)
  if (ENVS.NETLIFY_ENV) {
    console.log(`DEPLOYING @ Netlify`)
  }
  if (ENVS.GHPAGES) {
    console.log(`DEPLOYING @ Github Pages`)
  }
  console.log('=================================')
})

const logBuildPlugins = once(() => {
  const pluginList = []

  plugins.forEach((plugin) => {
    if (isObject(plugin) && has(plugin, 'resolve')) {
      pluginList.push(`${plugin.resolve} {${keys(plugin.options).join(' ')}}`)
    } else {
      pluginList.push(plugin)
    }
  })
  plugins.sort()

  console.log(pluginList.join('\n'))
  console.log('=================================')
})

const logBuild = () => {
  logBuildEnvs()
  logBuildPlugins()
}

module.exports = {
  logBuildEnvs,
  logBuildPlugins,
  logBuild,
}
