import { TemplateTag } from 'common-tags'

export default function(styles) {
  function localClass(key) {
    return Object.keys(styles).includes(key) ? styles[key] : key
  }

  return new TemplateTag({
    onSubstitution(substitution) {
      return substitution ? substitution : ''
    },
    onEndResult(endResult) {
      return endResult
      .trim()
      .split(' ')
      .reduce((result, key) => `${result} ${localClass(key)}`, '')
    }
  })
}