// Given a string, return the character that us most commonnly used in the stirng


function maxChar(str = "") {
  const charMap = {};
  let max = 0
  let maxString = ""

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }
  for (let ch in charMap) {
    if (charMap[ch] > max) {
      max = charMap[ch]
      maxString = ch
    }
  }
  return { "character": maxString, "max": max }
}

console.log(maxChar("uchihamadara isvery good infdoing what he does good boy"))
