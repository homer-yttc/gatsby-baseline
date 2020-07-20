import React from 'react'
import { AppContextProvider } from '../../src/store/useAppContext'

// Style wide base styling
import '../../src/styles/_root.scss'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => <AppContextProvider>{element}</AppContextProvider>
