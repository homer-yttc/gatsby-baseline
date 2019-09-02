import React, { useMemo } from 'react'
import { noop } from 'lodash'
import * as PropTypes from 'prop-types'

const Memoized = ({ children, digest, deps }) => {
  useMemo(digest, deps)
  return useMemo(() => <>{children}</>, deps)
}

Memoized.defaultProps = {
  deps: [],
  digest: noop,
}

Memoized.propTypes = {
  deps: PropTypes.arrayOf(PropTypes.any).isRequired,
  digest: PropTypes.func,
}

export default Memoized
