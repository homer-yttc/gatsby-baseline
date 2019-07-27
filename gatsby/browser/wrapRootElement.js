import React from 'react'
import { AppContextProvider } from '../../src/lib/state/useAppContext'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => <AppContextProvider>{element}</AppContextProvider>
