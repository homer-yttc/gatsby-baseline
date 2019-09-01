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
- [gatsby-plugin-fastclick](https://github.com/escaladesports/gatsby-plugin-fastclick) for better mobile click response with [Fastclick](https://github.com/ftlabs/fastclick)
- [gatsby-plugin-transition-link](https://github.com/TylerBarnes/gatsby-plugin-transition-link) Page Transitions
- [gatsby-plugin-sass](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass), 'cause SASS still rules
- [gatsby-plugin-postcss](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-postcss) for PostCSS support to clean up/unify built css
- [gatsby-plugin-prefetch-google-fonts](https://github.com/escaladesports/gatsby-plugin-prefetch-google-fonts) for pre-fetching google fonts in builds 
- [gatsby-plugin-nprogress](https://www.gatsbyjs.org/packages/gatsby-plugin-nprogress/) _Gatsby's official_ subtle & sexy page loader, appears only when page loads are longer than 1s
- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) for easy detection of when elements have been scrolled into view
- [react-hook-form](https://react-hook-form.com/api) a modern take on handling forms with react hooks, coupled with the popular [yup](https://github.com/jquense/yup) schema validation library, for powerful, modular, and extensible form handling across your project 

*Accessibility*
- [gatsby-plugin-accessibilityjs](https://github.com/alampros/gatsby-plugin-accessibilityjs) provides realtime highlighting of glaring accessibility errors during development. 

*Media*
- From core: `gatsby-transformer-sharp`,`gatsby-plugin-sharp`,`gatsby-image`
- [gatsby-plugin-svgr](https://github.com/zabute/gatsby-plugin-svgr) SVGO processing for clean consistent SVG usage, resulting in usable inline or React Component tags

*State*
- `useAppContext` React Context for global data and UI state across Gatsby site inspired by [State Management with React Hooks and Context API in 10 lines of code!](https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c) and [Using React Context API with Gatsby](https://www.gatsbyjs.org/blog/2019-01-31-using-react-context-api-with-gatsby/)
- [react-async-hook](https://github.com/slorber/react-async-hook#readme) provides safe means of using async functions or API services without UI state getting left behind or updating needlessly
- [PENDING] Schema JSONLD

*Testing*
- [PENDING] [lighthouse](https://developers.google.com/web/tools/lighthouse/) test with Google's Lighthouse
- [PENDING] Cypress

*Meta*
- From core: `gatsby-plugin-react-helmet`, `gatsby-plugin-manifest`
- [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/) _Gatsby's official_ sitemap builder 
- [gatsby-plugin-robots-txt](https://github.com/mdreizin/gatsby-plugin-robots-txt) to help manage robots across different envs, ensuring they're stopped where needed
- [gatsby-plugin-canonical-urls](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-canonical-urls) for setting desired canonical site path on pages

*Data Source*
- From core: `gatsby-source-filesystem`
- [gatsby-plugin-page-creator](https://www.gatsbyjs.org/packages/gatsby-plugin-page-creator/) _Gatsby's official_ helper plugin, for moving `pages` to a more meaningful place 
- [gatsby-plugin-extract-schema](https://github.com/NickyMeuleman/gatsby-plugin-extract-schema) automatically extract Gatsby's graphql schemas, and process them against the eslint'ing, to ensure devs are not going out of bounds

*Tooling*
- [Lefthook](https://github.com/Arkweid/lefthook) for support in managing/implementing git hooks
- [Prettier](https://prettier.io/) for code style
- [gatsby-plugin-eslint](https://github.com/mongkuen/gatsby-plugin-eslint) with [preset config](./.eslintrc.js) for fine tune control. Out of the box extends from: `airbnb`, `eslint:recommended`, `plugin:react/recommended`
- [gatsby-plugin-catch-links](https://www.gatsbyjs.org/packages/gatsby-plugin-catch-links/) _Gatsby's official_ helper plugin, for detecting existing Gatsby routes found in `<a>` tags and converting them to `<Link>`s automatically
- [gatsby-plugin-polyfill-io](https://github.com/escaladesports/gatsby-plugin-polyfill-io) optional polyfill for [supporting es6/next features](https://polyfill.io/v3/url-builder/) in s8it browsers 
- [gatsby-plugin-webpack-bundle-analyzer](https://github.com/escaladesports/gatsby-plugin-webpack-bundle-analyzer) which is built on top of [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) to keep an eye on your bundle size
- [@babel/plugin-proposal-optional-chaining](https://babeljs.io/docs/en/next/babel-plugin-proposal-optional-chaining.html) with ES optional chaining in Stage 3 approval (Aug 2019), finally worth to adopt this invaluable object retrieval

*Security*
- [gatsby-plugin-recaptcha](https://github.com/escaladesports/gatsby-plugin-recaptcha) & [react-recaptcha](https://github.com/appleboy/react-recaptcha) for easy use of reCaptcha on site
- [gatsby-plugin-csp](https://github.com/bejamas/gatsby-plugin-csp) easy Content Security Policy control to aid in preventing XSS or injection attacks

*Hosting*
- From core: `gatsby-plugin-offline` (optionally enabled, not enforced)
- [gatsby-plugin-netlify](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify) for support in netlify builds

## ⚰️ Failures and Lessons
### [gatsby-plugin-root-import](https://github.com/mongkuen/gatsby-plugin-root-import)
> Set Webpack to resolve root, allowing you to import modules from an absolute project path rather than relative ../../ paths.

**Ideal**: Because `import x from '../../../y` paths are a bulls8it standard to live by :P

**The Issue:**<br/>The concept of moving away from awkwardly linked files is desirable, as it can be hard to move files around later in refactors. However, IDE support has no concept of where you're referencing these methods and components from sadly. As such, this breaks the ability to jump to definitions which is a detriment to workflow. So as practical as it is to want a clean manageable way to associate files, it just didn't pan out in actual usage. 

~~**Resolution:**<br/>While there is a bit of manual effort, a clean viable alternate was found. With components grouped into logicial concerns, i.e `layout`, `media`, `meta`, and the desire to namespace these effectively, it gets verbose targeting `../layout/Layout/Layout` named components.~~

~~While module imports don't allow the right flexibility, because Gatsby is based in webpack, we're not limited and can set up a given file to use node style importing with `require` statements.~~

~~**Implementation:**<br/>As such, it allows us to create index.js files per component concerns. So for the `layout` component group, we can define:~~

```js
// components/layout/index.js
import Layout from './Layout/Layout'
import Header  from './Header/Header'

export {
  Layout,
  Header
}
```

~~Thus, from any components on site, say `pages`, we can easily target these in a clean way without breaking IDE referencing:~~

```js
// components/pages/index.js
import { Layout } from '../layout' // Assumes the index.js, and pulls the correct component.
```

~~In the long run, this will help address both concerns on refactoring and inherent IDE support with clean simple pathing.~~

**Failed Resolution, abandoned:**<br>
So, after many debug cycles to see why a series of issues with react hooks from the about implementation, I've abandoned this endeavour and am accepting being a slave to relative pathing to maintain full IDE support and refactor controls. Where ideals mean reality, sometimes things just don't work out sadly. Lesson learned, moving on!

## ☮️ Inspiration taken from:
[gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default)<br/>
[gatsby-advanced-starter](https://github.com/Vagr9K/gatsby-advanced-starter)<br/>
[gatsby-universal](https://github.com/fabe/gatsby-universal)<br/>
[staticfy](https://github.com/PetrNikolas/staticfy)<br/>
