const { isObject } = require('lodash')
const { PAGE_TRANSFORMER_TYPE, PAGE_TRANSFORMER } = require('./pageTransformers')

const createNodePage = (edge, component, transformerType = PAGE_TRANSFORMER_TYPE.drupalNode) => {
  // Only accept valid stores
  if (!edge || !isObject(edge.node) || !edge.node.id) {
    return null
  }

  const node = PAGE_TRANSFORMER[transformerType](edge.node)

  // Hide store pages that should be hidden.
  if (node.hidden === true) {
    return null
  }

  // console.log('store', node.alias);

  return {
    // Path for this page — required
    path: node.alias || node.slug,
    component,
    context: {
      data: node,
    },
  }
}

module.exports = createNodePage
