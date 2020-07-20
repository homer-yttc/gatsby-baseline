import { has } from 'lodash'

export function isClassComponent(component) {
  return typeof component === 'function' && !!component.prototype.isReactComponent
}

export function isFunctionComponent(component) {
  return typeof component === 'function' && String(component).includes('return React.createElement')
}

export default function isReactComponent(component) {
  return has(component, '$$typeof')
}

export function findAncestor(source, sel) {
  let el = source
  // eslint-disable-next-line no-cond-assign
  while ((el = el.parentElement) && !(el.matches || el.matchesSelector).call(el, sel));
  return el
}
