import { useState } from 'react'
import { isUndefined } from 'lodash'

const useWindow = () => {
  const [win] = useState(!isUndefined(window) ? window : null)

  return win
}

export default useWindow
