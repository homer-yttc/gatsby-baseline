import React from 'react'
import * as PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Image from '@media/image/image'

const KitchenSink = ({ display }) => {
  if (display) {
    // todo.
  }

  return (
    <div>
      <h1>Kitchen Sink!</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div
        style={{
          maxWidth: `300px`,
          marginBottom: `1.45rem`,
        }}
      >
        <Image/>
      </div>
      <label htmlFor="abc">
        <span>Abc</span>
        <input id="abc" type="text" name="abc"/>
      </label>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

KitchenSink.defaultProps = {
  display: true,
}

KitchenSink.propTypes = {
  display: PropTypes.bool,
}

export default KitchenSink