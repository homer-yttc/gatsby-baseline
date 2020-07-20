const { compact } = require('lodash')
const { CWD } = require('../env')
// Supporting
const processNode = require('./createPages/createNodePage')
// Queries
const allWpPosts = require('../../data/graphql/allWpPosts')

/**
 * List of different Node Types from Data Sources
 */
const pageType = [
  {
    query: allWpPosts,
    component: `${CWD}/src/templates/WpPosts/WpPosts.js`,
  },
]

/**
 * Process all of the page types to effectively digest and generate pages from dynamic nodes.
 *
 * @param graphql
 * @param actions
 * @param reporter
 * @returns {Promise<unknown[]>}
 */
const createPages = ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const pageLoaders = []

  pageType.forEach(({ query: { query, source, type, transformerType }, component }) => {
    const loader = graphql(query, { limit: 1000 })
      .then(({ data = {}, errors }) => {
        const pages = []
        if (errors) {
          throw errors
        }
        // Create blog post pages.
        const { edges = [] } = data[source] || {}
        edges.forEach((edge) => {
          const page = processNode(edge, component, transformerType)

          // If a page is to be created (wasn't meant to be hidden, or errored), create it now.
          if (page) {
            pages.push(page)
            createPage(page)
          }
        })

        reporter.success(`|> ${compact(pages).length} ${type} GENERATED.`)
      })

    reporter.info(`|> ${type} QUEUED.`)
    pageLoaders.push(loader)
  })

  return Promise.all(pageLoaders)
}

module.exports = createPages
