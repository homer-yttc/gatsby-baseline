const { transformNode } = require('./drupal')
const { transformPost } = require('./wordpress')

const PAGE_TRANSFORMER_TYPE = {
  drupalNode: 'drupalNode',
  wpPost: 'wpPost'
}

const PAGE_TRANSFORMER = {
  drupalNode: transformNode,
  wpPost: transformPost
}

module.exports = {
  PAGE_TRANSFORMER_TYPE,
  PAGE_TRANSFORMER
}
