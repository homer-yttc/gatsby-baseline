/* eslint-disable no-console */
const { isObject, forEach } = require('lodash')
const transformField = require('../common/field')

const transformPost = (edgeNode = {}) => {
  const node = {}

  if (isObject(edgeNode)) {
    forEach(edgeNode, (content, fieldName) => {
      // console.log('edgeNode', fieldName, content)
      transformField(node, content, fieldName)

      switch (fieldName) {
        case 'content':
          node[fieldName] = node[fieldName]
            .replace('\n', '')
            // eslint-disable-next-line no-useless-escape
            .replace('\"', '"')
          break
      }
    })
  }

  console.log('transformPost', node.slug)

  /*if (node.node && node.node.content) {
    // console.log('transformNode:content', node.node.content)

    forEach(node.node.content, (paragraph) => {
      // console.log('transformNode:paragraph', paragraph)
      const { containerFooter } = paragraph

      if (containerFooter) {
        // console.log('transformNode:containerFooter', paragraph.containerFooter)

        forEach(containerFooter, (subparagraph) => {
          if (subparagraph.images) {
            // console.log('transformNode:containerFooter:images', subparagraph.images)
          }
        })
      }
    })
  }*/

  return node
}

module.exports = transformPost
