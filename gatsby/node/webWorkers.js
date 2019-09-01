/**
 * Loads .worker files to serve as web workers on demand or via async.
 * @param replaceWebpackConfig
 * @param getConfig
 */
const loadWebWorkers = (replaceWebpackConfig, getConfig) => {
  const config = getConfig()

  config.module.rules.push({
    test: /\.worker\.js$/,
    use: { loader: 'workerize-loader' },
  })

  config.output.globalObject = 'this'

  replaceWebpackConfig(config)
}

module.exports = {
  loadWebWorkers,
}
