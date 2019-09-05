import { get } from 'lodash'

/**
 * A safe convenient way to obtain the window, or part of it, in gatsby DOM without build errors.
 * @param path
 * @returns {Window}
 */
const getWindow = (path = '') => {
  const win = typeof window !== 'undefined' ? window : {}
  return path === '' ? win : get(win, path, null)
}

export default getWindow
