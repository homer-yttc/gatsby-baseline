const { get, isObject, isArray, camelCase, forEach, keys, has } = require('lodash')

const formatFieldsValueHelper = (field) => {
  if (keys(field).length === 1 && has(field, 'value')) {
    return field.value
  }
  return field
}

const formatFieldsRelationHelper = (field) => {
  return get(field, 'localFile.childImageSharp', field)
}

const formatFieldsValue = (fields) => {
  let data = formatFieldsValueHelper(fields)
  if (isObject(data)) {
    if (has(data, 'relationships')) {
      const { relationships } = data
      delete data.relationships
      data = { ...data, ...relationships }
    }
    data = formatFieldsRelationHelper(data)
    if (isObject(data)) {
      forEach(data, (field, key) => {
        data[key] = formatFieldsValue(field)
      })
    }
  }
  return data
}

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

  value = formatFieldsValue(value)

  // Mutate the target object with the updated value
  if (isArray(target)) {
    target.push(value)
  } else if (isObject(target)) {
    target[name] = value
  }

  return target
}

module.exports = transformField
