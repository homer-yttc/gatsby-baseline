import { Link } from 'gatsby'
import * as PropTypes from 'prop-types'
import React from 'react'
import './_header.scss'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header-wrapper">
      <h1 className="header-title">
        <Link to="/" className="header-link">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
