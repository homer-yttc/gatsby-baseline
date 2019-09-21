[![Greenkeeper badge](https://badges.greenkeeper.io/homer-yttc/gatsby-baseline.svg)](https://greenkeeper.io/) [![Netlify Status](https://api.netlify.com/api/v1/badges/d899edee-fd86-4d0e-8747-0273fef19cb2/deploy-status)](https://app.netlify.com/sites/gatsby-baseline/deploys)

<h1>
  <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="30" />  Homer's Gatsby Starter 📍
</h1>

An opinionated _kitchen sink_ [Gatsby v2.x](https://www.gatsbyjs.org) starter project.

**Install Instructions**
To get up and running easily, follow these steps:
```shell script
# clone the repo, to a custom folder
git clone https://github.com/homer-yttc/gatsby-baseline.git my-gatsby-project 
# install node modules
cd my-gatsby-project
npm i
# test that the site builds and runs for you
npm run dev
```

<hr/>

# Deployments

A variety of popular methods for deployment have been added to this project to give you the most flexibility in where you desire hosting your project. If needed, you can clean out non-used hosting aspects, but there is no harm if you leave them. Any gatsby-plugins related to specific hosting types are isolate to **only** run when those hosting ENVs are activated, to help keep your builds as clean as possible for your chosen path. Enjoy!

## Github Pages

## Google's Firebase

## Netlify

# 🏗️ Multi-sites & Environments

Some fine point essentials required for working with Gatsby in the real world, where there of often never a 'single' version of the site in the wild. While at some I hope to externalize these into a gatsby theme include, at the moment they're too tangle and hand-on against project level build requirements.

## [gatsby/env.js](./gatsby/env.js)
Out of the box, one of Gatsby's lacking features is how to best handle working with deploying your project to different sites, which naturally also differ from hosting to hosting too! To help address some of these weak points, in combination with libraries like dotenv-flow (listed below in Features), these files aim to ease the burden or running builds across different sites/branches beyond a single hosting mentality. So when you have the need to spin up a hosted dev/stagin/prod site side by side on different branches, this is where the magic happens. 

A dependable utility, [env](./gatsby/env.js), was created to obtain and deal with ENV variables which might need to affect how you perform your builds.

## [gatsby/logging.js](./gatsby/logging.js)
When leveraging multi-sites as well, detailed build logs of what ENVs are running (like the builds site URL), or just what plugins are actually running on a given site are also lacking in gatsby. 

As such, [logging](./gatsby/logging.js) was created to provide helpers easily display various ENV variables on build when working across different platform, and a list of which gatsby plugins are currently running and what options are enabled (key name, not specifics)

<hr/>

# Project Breakdown

A list of code features and build plugins which have been configured and crafted to get you up and running with ease and consistency.

## 🎯 Features

The following is a list of all the key code level utilities and supporting libraries which you can leverage while developing your site.

**Code Essentials**
- [lodash](https://github.com/lodash/lodash/) the holy grail of native JS tools
- [momentjs](https://github.com/moment/moment/) because, you don't date without moment
- [workerize-loader](https://github.com/developit/workerize-loader) support for running web workers on demand or via async
- [@babel/plugin-proposal-optional-chaining](https://babeljs.io/docs/en/next/babel-plugin-proposal-optional-chaining.html) with ES optional chaining in Stage 3 approval (Aug 2019), finally worthy to adopt this invaluable object retrieval (*Note:* doesn't run in build js, only on site js)

**React Essentials**
- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) for easy detection of when elements have been scrolled into view
- [react-hook-form](https://react-hook-form.com/api) a modern take on handling forms with react hooks, coupled with the popular [yup](https://github.com/jquense/yup) schema validation library, for powerful, modular, and extensible form handling across your project
- [react-async-hook](https://github.com/slorber/react-async-hook#readme) provides safe means of using async functions or API services without UI state getting left behind or updating needlessly

**State**
- `useAppContext` React Context for global data and UI state across Gatsby site inspired by [State Management with React Hooks and Context API in 10 lines of code!](https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c) and [Using React Context API with Gatsby](https://www.gatsbyjs.org/blog/2019-01-31-using-react-context-api-with-gatsby/)
- [PENDING] Schema JSONLD

**Testing**
- [PENDING] [lighthouse](https://developers.google.com/web/tools/lighthouse/) test with Google's Lighthouse
- Cypress

**Tooling**
- [lefthook](https://github.com/Arkweid/lefthook) for support in managing/implementing git hooks
- [prettier](https://prettier.io/) for code style
- [eslint](https://eslint.org) with [preset config](./.eslintrc.js) for fine tune control. Out of the box extends from: `airbnb`, `eslint:recommended`, `plugin:react/recommended`
- `browserlist` within the [package.json](./package.json) allows Gatsby/babel to compile needed polyfills or css prefixing for desired browser support. [Officially supported by Gatsby](https://www.gatsbyjs.org/docs/browser-support/)
- [dotenv-flow](https://github.com/kerimdzhanov/dotenv-flow) adds support for managing ENV variables with greater control, allowing necessary settings to pass between developers yet still allowing local (ignored) files to take precedence

## 📋 Gatsby Config/Plugins

The following is a list of plugins supporting the gatsby build cycle to get the most out of your project.

**[Accessibility](./gatsby/config/accessibility.js)**
- [gatsby-plugin-accessibilityjs](https://github.com/alampros/gatsby-plugin-accessibilityjs) provides realtime highlighting of glaring accessibility errors during development. 

**[Data Source](./gatsby/config/data-source.js)**
- From core: `gatsby-source-filesystem`
- [gatsby-plugin-page-creator](https://www.gatsbyjs.org/packages/gatsby-plugin-page-creator/) _Gatsby's official_ helper plugin, for moving `pages` to a more meaningful place 
- [gatsby-plugin-extract-schema](https://github.com/NickyMeuleman/gatsby-plugin-extract-schema) automatically extract Gatsby's graphql schemas, and process them against the eslint'ing, to ensure devs are not going out of bounds

**[Hosting](./gatsby/config/hosting.js)**
- From core: `gatsby-plugin-offline` (optionally enabled, not enforced)
- [gatsby-plugin-netlify](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify) for support in netlify builds. _Note:_ Will only enable if actually deploying on netlify
- [gatsby-plugin-prefetch-google-fonts](https://github.com/escaladesports/gatsby-plugin-prefetch-google-fonts) for pre-fetching google fonts in builds to use on site, as needed 

**[Media](./gatsby/config/media.js)**
- From core: `gatsby-transformer-sharp`,`gatsby-plugin-sharp`,`gatsby-image`
- [gatsby-plugin-svgr](https://github.com/zabute/gatsby-plugin-svgr) SVGO processing for clean consistent SVG usage, resulting in usable inline or React Component tags

**[Meta](./gatsby/config/meta.js)**
- From core: `gatsby-plugin-react-helmet`, `gatsby-plugin-manifest`
- [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/) _Gatsby's official_ sitemap builder 
- [gatsby-plugin-robots-txt](https://github.com/mdreizin/gatsby-plugin-robots-txt) to help manage robots across different envs, ensuring they're stopped where needed
- [gatsby-plugin-canonical-urls](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-canonical-urls) for setting desired canonical site path on pages

**[Security](./gatsby/config/security.js)**
- [gatsby-plugin-recaptcha](https://github.com/escaladesports/gatsby-plugin-recaptcha) & [react-recaptcha](https://github.com/appleboy/react-recaptcha) for easy use of reCaptcha on site
- [gatsby-plugin-csp](https://github.com/bejamas/gatsby-plugin-csp) easy Content Security Policy control to aid in preventing XSS or injection attacks. Reasonable defaults in place with Google exclusions for GA/GTM/Maps or Fonts (if you're not pre-fetching)

**[Tooling](./gatsby/config/tooling.js)**
- [gatsby-plugin-eslint](https://github.com/mongkuen/gatsby-plugin-eslint) ensuring custom eslint applies as expected
- [gatsby-plugin-stylelint](@danbruegge/gatsby-plugin-stylelint) ensuring style is linted as you develop with gatsby
- [gatsby-plugin-catch-links](https://www.gatsbyjs.org/packages/gatsby-plugin-catch-links/) _Gatsby's official_ helper plugin, for detecting existing Gatsby routes found in `<a>` tags and converting them to `<Link>`s automatically
- [gatsby-plugin-polyfill-io](https://github.com/escaladesports/gatsby-plugin-polyfill-io) optional polyfill for [supporting es6/next features](https://polyfill.io/v3/url-builder/) if you don't prefer babel's 
- [gatsby-plugin-webpack-bundle-analyzer](https://github.com/escaladesports/gatsby-plugin-webpack-bundle-analyzer) which is built on top of [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) to keep an eye on your bundle size
- [gatsby-plugin-sass](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass), 'cause SASS still rules

**[UI](./gatsby/config/ui.js)**
- [gatsby-plugin-fastclick](https://github.com/escaladesports/gatsby-plugin-fastclick) for better mobile click response with [Fastclick](https://github.com/ftlabs/fastclick)
- [gatsby-plugin-transition-link](https://github.com/TylerBarnes/gatsby-plugin-transition-link) Page Transitions
- [gatsby-plugin-nprogress](https://www.gatsbyjs.org/packages/gatsby-plugin-nprogress/) _Gatsby's official_ subtle & sexy page loader, appears only when page loads are longer than 1s

## 📃 Gatsby Nodes
- [webWorkers](./gatsby/node/webWorkers.js), using `workerizer` will automatically turn `*.worker.js` files into callable functions from the site lib/components affecting gatsby's `onCreateWebpackConfig` to tie in the loader on build.

## 🖥️ Gatsby Browser
- [wrapRootElement](./gatsby/browser/wrapRootElement.js) will set the `useAppContext` across the root page element in gatsby, so that any component will have access to the global state as needed.

<hr/>

# ⚰️ Failures and Resolutions
## [gatsby-plugin-root-import](https://github.com/mongkuen/gatsby-plugin-root-import)
> Set Webpack to resolve root, allowing you to import modules from an absolute project path rather than relative ../../ paths.

**Ideal**: Because `import x from '../../../y` paths are a bulls8it standard to live by :P

**The Issue:**<br/>The concept of moving away from awkwardly linked files is desirable, as it can be hard to move files around later in refactors. However, IDE support has no concept of where you're referencing these methods and components from sadly. As such, this breaks the ability to jump to definitions which is a detriment to workflow. So as practical as it is to want a clean manageable way to associate files, it just didn't pan out in actual usage. 

**Resolution:**<br/>While there is a bit of manual effort, a clean viable alternate was found. With components grouped into logicial concerns, i.e `layout`, `media`, `meta`, and the desire to namespace these effectively, it gets verbose targeting `../layout/Layout/Layout` named components.

While module imports don't allow the right flexibility, because Gatsby is based in webpack, we're not limited and can set up a given file to use node style importing with `require` statements.

**Implementation:**<br/>As such, it allows us to create index.js files per component concerns. So for the `layout` component group, we can define:

```js
// components/layout/index.js
import Layout from './Layout/Layout'
import Header  from './Header/Header'

export {
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

**Note:** To avoid cyclic dependencies, any components inside the same domain, i.e `layout` folder, must adhere to using local references for imports still, and can't benefit from the index file usage, but it's a small price for the cleanliness this code standard affords else where.

## ☮️ Inspiration taken from:
[gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default)<br/>
[gatsby-advanced-starter](https://github.com/Vagr9K/gatsby-advanced-starter)<br/>
[gatsby-universal](https://github.com/fabe/gatsby-universal)<br/>
[staticfy](https://github.com/PetrNikolas/staticfy)<br/>
