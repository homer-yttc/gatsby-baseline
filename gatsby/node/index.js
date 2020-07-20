/* eslint-disable global-require */

module.exports = {
  onCreateWebpackConfig: require('./onCreateWebpackConfig'),
  createPages: require('./createPages'),
  createSchemaCustomization: require('./createSchemaCustomization')
}
