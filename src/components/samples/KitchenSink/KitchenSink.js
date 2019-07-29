import React from 'react'
// import * as PropTypes from 'prop-types'
import TransitionLinks from '../TransitionLinks/TransitionLinks'
import Modal from '../Modal/Modal'

const KitchenSink = () => {
  return (
    <div>
      <Modal />
      <TransitionLinks />
    </div>
  )
}

KitchenSink.defaultProps = {}

KitchenSink.propTypes = {}

export default KitchenSink
