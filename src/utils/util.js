export const isEmpty = (value) => {
  if (typeof value === 'undefined') {
    return true
  }

  if (value === null) {
    return true
  }

  if (typeof value !== 'number' && value.toString().trim().length === 0) {
    return true
  }

  return false
}
