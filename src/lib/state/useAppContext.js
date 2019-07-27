import React, { createContext, useContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import initialAppState from './initialAppState'

export const AppContext = createContext()

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => (
  <AppContext.Provider value={useReducer(AppReducer, initialAppState)}>
    {children}
  </AppContext.Provider>
)

const useAppContext = () => useContext(AppContext)

export default useAppContext
