const { compact } = require('lodash')
const { CWD } = require('../env')
// Supporting
const processNode = require('./createPages/createNodePage')
// Queries

/**
 * List of different Node Types from Drupal
 */
const pageType = [
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

  pageType.forEach(({ query: { query, source, type }, component }) => {
    const loader = graphql(query, { limit: 1000 }).then(({ data = {}, errors }) => {
      const pages = []
      if (errors) {
        throw errors
      }
      // Create blog post pages.
      const { edges = [] } = data[source] || {}
      edges.forEach((edge) => {
        const page = processNode(edge, component)

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
