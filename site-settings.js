const srcPath = `${process.cwd()}/src`
const compPath = `${srcPath}/components`

const fallBack = `http://localhost:8000`
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = fallBack,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === `production`
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

let libPath = `${srcPath}/lib`
module.exports = {
  manifest: {
    name: `gatsby-starter-default`,
    short_name: `starter`,
    lang: `en`,
    description: `A new gatsby site.`,
    start_url: `/`,
    background_color: `#663399`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.}
  },
  siteMetadata: {
    siteUrl: siteUrl || fallBack,
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  srcPaths: {
    src: srcPath,
    styles: `${srcPath}/styles`,
    lib: libPath,
    '@hooks': `${libPath}/hooks`,
    "@layout": `${compPath}/layout`,
    "@pages": `${compPath}/pages`,
    "@meta": `${compPath}/meta`,
    "@media": `${compPath}/media`,
  },
}
