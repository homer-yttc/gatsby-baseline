/* eslint-disable */
const ghpages = require('gh-pages')
const { repository: { url } } = require('../package')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: `${url}.git`,
  },
  () => {
    console.log('Deploy Complete!')
  }
)
