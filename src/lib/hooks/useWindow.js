import { useState, useEffect } from 'react'

const useWindow = () => {
  const [win, setWin] = useState()

  useEffect(() => {
    try {
      setWin(window)
    } catch (e) {
      // Ignore.
    }
  }, [])

  return win
}

export default useWindow
