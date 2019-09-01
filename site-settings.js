const srcPath = `${process.cwd()}/src`
const compPath = `${srcPath}/components`
const libPath = `${srcPath}/lib`

const { SITE_URL } = require('./gatsby/env')

module.exports = {
  manifest: {
    name: 'gatsby-starter-default',
    short_name: 'starter',
    lang: 'en',
    description: 'A new gatsby site.',
    start_url: '/',
    background_color: '#663399',
    theme_color: '#663399',
    display: 'minimal-ui',
    // This path is relative to the root of the site.
    icon: 'src/assets/images/gatsby-icon.png',
  },
  siteMetadata: {
    siteUrl: SITE_URL,
    title: 'Gatsby Default Starter',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  srcPaths: {
    src: srcPath,
    styles: `${srcPath}/styles`,
    lib: libPath,
    '@hooks': `${libPath}/hooks`,
    '@layout': `${compPath}/layout`,
    '@pages': `${compPath}/pages`,
    '@meta': `${compPath}/meta`,
    '@media': `${compPath}/media`,
  },
}
