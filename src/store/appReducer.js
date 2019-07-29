import { assign, has, defer } from 'lodash'
import { LOCAL_STORAGE_KEY } from './appState'
import settingsReducer from './state/settings'

export default (state, action) => {
  // middleware goes here, i.e calling analytics service, etc.
  const newState = {
    ...state,
  }

  assign(newState, settingsReducer(newState, action))

  // Set local storage, if enabled.
  LOCAL_STORAGE_KEY &&
    defer(() => {
      if (has(localStorage, 'setItem')) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState))
      }
    })

  return newState
}
