export default function(styles) {
  return function(keys) {
    return keys.split(' ').reduce((result, key) => `${result} ${styles[key]}`, '')
  }
}