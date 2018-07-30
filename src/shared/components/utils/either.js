export default function either(value, tester = value => !!value) {
  return function orElse(orElse) {
    return tester(value) ? value : orElse
  }
}