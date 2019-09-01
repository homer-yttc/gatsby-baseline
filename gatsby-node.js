/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { loadWebWorkers } = require('./gatsby/node')

exports.onCreateWebpackConfig = ({ actions: { replaceWebpackConfig }, getConfig }) => {
  // Loads .worker files to serve as web workers on demand or via async.
  loadWebWorkers(replaceWebpackConfig, getConfig)
}
