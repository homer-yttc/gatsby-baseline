const { isObject, isArray, camelCase, forEach } = require('lodash')

const transformField = (target, fieldValue = null, fieldName = '') => {
  let name = fieldName
  let value = fieldValue

  // Transform stuff.
  // If this an array of components
  if (isArray(fieldValue)) {
    // Transform stuff.
    value = []
    forEach(fieldValue, (paragraph) => {
      transformField(value, paragraph)
    })
  } else if (isObject(value)) {
    // Recursively iterate over the paragraph fields
    value = {}
    forEach(fieldValue, (subfieldValue, subfieldName) => {
      transformField(value, subfieldValue, subfieldName)
    })
  }

  // Now format the name for the component
  if (name) {
    name = camelCase(name.replace(new RegExp('field_p_|field_', 'gi'), ''))
  }

  // Mutate the target object with the updated value
  if (isArray(target)) {
    target.push(value)
  } else if (isObject(target)) {
    target[name] = value
  }

  return target
}

module.exports = transformField
