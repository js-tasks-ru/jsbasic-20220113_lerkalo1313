function checkSpam(str) {
  const lowerStr = str.toLowerCase()
  if (lowerStr.includes('1xbet') || lowerStr.includes('xxx')) {
    return true
  }
  return false
}
