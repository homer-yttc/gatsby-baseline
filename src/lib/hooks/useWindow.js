import { useState, useLayoutEffect } from 'react'

const useWindow = () => {
  const [win, setWin] = useState()

  useLayoutEffect(() => {
    try {
      setWin(window)
    } catch (e) {
      // Ignore.
    }
  }, [])

  return win
}

export default useWindow
