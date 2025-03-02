export function maskPhone(value) {
  let digits = value.replace(/\D/g, '').substring(0, 11)

  const pattern = '(__) _____-____'
  let result = ''
  let digitIndex = 0

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === '_') {
      if (digitIndex < digits.length) {
        result += digits[digitIndex++]
      } else {
        result += '_'
      }
    } else {
      result += pattern[i]
    }
  }

  return result
}
