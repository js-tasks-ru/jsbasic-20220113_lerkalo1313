function factorial(n) {
  let result = 1
  if (!n) {
    return result
  }
  for (let i = n; i !== 0; i--) {
    result *= i
  }
  return result
}
