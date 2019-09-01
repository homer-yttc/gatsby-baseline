import { useState } from 'react'

const useWindow = () => {
  const [win, setWin] = useState()

  if (!win && typeof window !== 'undefined') {
    setWin(window)
  }

  return win
}

export default useWindow
