
export function isEmpty(data) {
  if (Object.prototype.toString.call(data) == '[object Array]') {
    if (data.length == 0) {
      return true
    } else {
      return false
    }
  } else if (Object.prototype.toString.call(data) == '[object Object]') {
    if (Object.keys(data).length == 0) {
      return true
    } else {
      return false
    }
  } else {
    if (data === '' || data === undefined || data === null) {
      return true
    } else {
      return false
    }
  }
}
