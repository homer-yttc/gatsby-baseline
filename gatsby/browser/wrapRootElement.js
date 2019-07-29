import React from 'react'
import { AppContextProvider } from '../../src/store/useAppContext'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => <AppContextProvider>{element}</AppContextProvider>
