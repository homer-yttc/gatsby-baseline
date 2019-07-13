[![Greenkeeper badge](https://badges.greenkeeper.io/homer-yttc/gatsby-baseline.svg)](https://greenkeeper.io/)

<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Homer's Gatsby Starter 📍
</h1>

An opinionated _kitchen sink_ Gatsby v2.x starter project.

## 🎯 Features

*UI*
- [gatsby-plugin-transition-link](https://github.com/TylerBarnes/gatsby-plugin-transition-link) Page Transitions
- [gatsby-delayed-link](https://github.com/escaladesports/gatsby-delayed-link) to optionally delay Gatsby `<Link>` for interactions, such as analytics firing 
- [gatsby-plugin-nprogress](https://www.gatsbyjs.org/packages/gatsby-plugin-nprogress/) _Gatsby's official_ subtle & sexy page loader, appears only when page loads are longer than 1s
- [gatsby-plugin-sass](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass), 'cause SASS still rules
- [gatsby-plugin-prefetch-google-fonts](https://github.com/escaladesports/gatsby-plugin-prefetch-google-fonts) for pre-fetching google fonts in builds 
- [gatsby-plugin-fastclick](https://github.com/escaladesports/gatsby-plugin-fastclick) for better mobile click response with [Fastclick](https://github.com/ftlabs/fastclick)
- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) for easy detection of when elements have been scrolled into view

*Accessibility*
- [gatsby-plugin-accessibilityjs](https://github.com/alampros/gatsby-plugin-accessibilityjs) provides realtime highlighting of glaring accessibility errors during development. 

*Media*
- From core: `gatsby-transformer-sharp`,`gatsby-plugin-sharp`,`gatsby-image`
- [gatsby-plugin-svgr](https://github.com/zabute/gatsby-plugin-svgr) SVGO processing for clean consistent SVG usage, resulting in usable inline or React Component tags

*State*
- [PENDING] React Context for global data and UI state, with SSR
- [PENDING] Schema JSONLD

*Testing*
- [PENDING] [lighthouse](https://developers.google.com/web/tools/lighthouse/) test with Google's Lighthouse
- [PENDING] Cypress

*Meta*
- From core: `gatsby-plugin-react-helmet`, `gatsby-plugin-manifest`
- [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/) _Gatsby's official_ sitemap builder 
- [gatsby-plugin-robots-txt](https://github.com/mdreizin/gatsby-plugin-robots-txt) to help manage robots across different envs, ensuring they're stopped where needed

*Tooling*
- From core: `gatsby-source-filesystem`
- [Prettier](https://prettier.io/) for code style
- [gatsby-plugin-eslint](https://github.com/mongkuen/gatsby-plugin-eslint) with [preset config](./.eslintrc.js) for fine tune control. Out of the box extends from: `airbnb`, `eslint:recommended`, `plugin:react/recommended`
- [gatsby-plugin-extract-schema](https://github.com/NickyMeuleman/gatsby-plugin-extract-schema) automatically extract Gatsby's graphql schemas, and process them against the eslint'ing, to ensure devs are not going out of bounds
- [gatsby-plugin-page-creator](https://www.gatsbyjs.org/packages/gatsby-plugin-page-creator/) _Gatsby's official_ helper plugin, for moving `pages` to a more meaningful place 
- [gatsby-plugin-catch-links](https://www.gatsbyjs.org/packages/gatsby-plugin-catch-links/) _Gatsby's official_ helper plugin, for detecting existing Gatsby routes found in `<a>` tags and converting them to `<Link>`s automatically
- [gatsby-plugin-webpack-bundle-analyzer](https://github.com/escaladesports/gatsby-plugin-webpack-bundle-analyzer) which is built on top of [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) to keep an eye on your bundle sizes
- [gatsby-plugin-polyfill-io](https://github.com/escaladesports/gatsby-plugin-polyfill-io) optional polyfill for [supporting es6/next features](https://polyfill.io/v3/url-builder/) in s8it browsers 

*Security*
- [gatsby-plugin-recaptcha](https://github.com/escaladesports/gatsby-plugin-recaptcha) & [react-recaptcha](https://github.com/appleboy/react-recaptcha) for easy use of reCaptcha on site
- [gatsby-plugin-csp](https://github.com/bejamas/gatsby-plugin-csp) easy Content Security Policy control to aid in preventing XSS or injection attacks

## ⚰️ Failures and Lessons
### [gatsby-plugin-root-import](https://github.com/mongkuen/gatsby-plugin-root-import)
> Ideal: Because `import x from '../../../y` paths are a bulls8it standard to live by :P

**The Issue:**<br/>The concept of moving away from awkwardly linked files is desirable, as it can be hard to move files around later in refactors. However, IDE support has no concept of where you're referencing these methods and components from sadly. As such, this breaks the ability to jump to definitions which is a detriment to workflow. So as practical as it is to want a clean manageable way to associate files, it just didn't pan out in actual usage. 

**Resolution:**<br/>While there is a bit of manual effort, a clean viable alternate was found. With components grouped into logicial concerns, i.e `layout`, `media`, `meta`, and the desire to namespace these effectively, it gets verbose targeting `../layout/Layout/Layout` named components.

While module imports don't allow the right flexibility, because Gatsby is based in webpack, we're not limited and can set up a given file to use node style importing with `require` statements.

**Implementation:**<br/>As such, it allows us to create index.js files per component concerns. So for the `layout` component group, we can define:

```js
// components/layout/index.js
/* eslint-disable quotes */
const Layout = require('./Layout/Layout')
const Header = require('./Header/Header')

module.exports = {
  Layout,
  Header
}
```

Thus, from any components on site, say `pages`, we can easily target these in a clean way without breaking IDE referencing:

```js
// components/pages/index.js
import { Layout } from '../layout' // Assumes the index.js, and pulls the correct component.
```

In the long run, this will help address both concerns on refactoring and inherent IDE support with clean simple pathing.

## ☮️ Inspiration taken from:
[gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default)<br/>
[gatsby-advanced-starter](https://github.com/Vagr9K/gatsby-advanced-starter)<br/>
[gatsby-universal](https://github.com/fabe/gatsby-universal)<br/>
