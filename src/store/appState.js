import { settingsDefaults } from './state/settings'

export const LOCAL_STORAGE_KEY = ''

const appStateDefaults = {
  version: process.env.version,
  settings: {
    ...settingsDefaults,
  },
}

export default appStateDefaults
