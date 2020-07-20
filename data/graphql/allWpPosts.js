const { readFileSync } = require('fs')
const { PAGE_TRANSFORMER_TYPE } = require('../../gatsby/node/createPages/pageTransformers')

const query = readFileSync(__dirname + '/allWpPosts.graphql', 'utf8')
const type = 'WpPosts'
const source = 'allWpPost'
const transformerType = PAGE_TRANSFORMER_TYPE.wpPost

module.exports = {
  type,
  source,
  query,
  transformerType,
}
