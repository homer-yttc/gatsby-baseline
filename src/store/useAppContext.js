import React, { createContext, useContext, useReducer } from 'react'
import appReducer from './appReducer'
import appStateDefaults from './appState'

export const AppContext = createContext(undefined)

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => (
  <AppContext.Provider value={useReducer(appReducer, appStateDefaults)}>
    {children}
  </AppContext.Provider>
)

export default () => useContext(AppContext)
