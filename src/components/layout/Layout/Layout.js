/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// Libs
import React from 'react'
import * as PropTypes from 'prop-types'
// State
import useSiteMetadata from '../../../lib/state/useSiteMetadata'
// Deps
import Header from '../Header/Header'
import SEO from '../../meta/SEO/SEO'
// Assets
import './reset.css'
import './_layout.scss'

const Layout = ({ pageTitle, children }) => {
  const { title } = useSiteMetadata()

  return (
    <>
      <SEO title={pageTitle} />
      <Header siteTitle={title} />
      <div className="main-wrapper">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
