const either = (value, tester = value => !!value) => orElse => (tester(value) ? value : orElse)

export default either
