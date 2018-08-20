export default function either(value, tester = value => !!value) {
  return orElse => tester(value) ? value : orElse
}