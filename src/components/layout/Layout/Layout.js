/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Header } from '../index'
import './reset.css'
import './layout.scss'
import { useSiteMetadata } from '../../../lib/state'

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <>
      <Header siteTitle={title}/>
      <div className="main-wrapper">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
