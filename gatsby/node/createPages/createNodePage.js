const { isObject } = require('lodash')
const { transformNode } = require('./drupal')

const createNodePage = (edge, component) => {
  // Only accept valid stores
  if (!edge || !isObject(edge.node) || !edge.node.id) {
    return null
  }

  const node = transformNode(edge.node)

  // Hide store pages that should be hidden.
  if (node.hidden === true) {
    return null
  }

  // console.log('store', node.alias);

  return {
    // Path for this page — required
    path: node.alias,
    component,
    context: {
      data: node,
    },
  }
}

module.exports = createNodePage
