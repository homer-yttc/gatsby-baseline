import badgee from 'badgee'
import { once } from 'lodash'

// Set up and configure these elements only once.
once(() => {
  badgee.config({
    enabled: process.env.NODE_ENV !== 'production',
    styled: true,
  })

  badgee.style('white', {
    color: 'black',
    background: 'white',
    // 'font-size': '15px',
    'font-weight': 'bold',
    'border-radius': '2px',
    padding: '1px 3px',
    margin: '0 1px',
  })
})()

export const consoleStyles = {
  green: 'green',
  red: 'red',
  orange: 'orange',
  white: 'white',
}

export const consoleBadge = (label = '', style = '') => {
  const con = label && style ? badgee.define(label, style) : badgee
  return {
    log: con.log,
    debug: con.log,
    info: con.info,
    warn: con.warn,
    error: con.error,
  }
}

// Export base as default
export default Object.freeze(consoleBadge())
