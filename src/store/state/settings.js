export const settingThemes = {
  default: 'default',
}

export const settingsDefaults = {
  theme: settingThemes.default,
}

export const settingsActions = {
  changeTheme: 'changeTheme',
}

// eslint-disable-next-line no-unused-vars
export default ({ settings, ...state }, { type, payload }) => {
  switch (type) {
    case settingsActions.changeTheme:
      settings.theme = payload.theme
      break
  }

  return {
    settings,
  }
}
