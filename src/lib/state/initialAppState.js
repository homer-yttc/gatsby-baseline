import { settingsDefaults } from './settings/reducer'

export const LOCAL_STORAGE_KEY = ''

const initialAppState = {
  version: process.env.version,
  settings: {
    ...settingsDefaults,
  },
}

export default initialAppState
