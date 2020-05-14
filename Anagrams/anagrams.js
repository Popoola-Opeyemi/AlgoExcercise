
// Check to see if 2 provided strings are anagrams of each other.

const buildCHarMap = (str) => {
  const charMap = {}
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap
}

const anagrams = (firstString, secondString) => {
  const aCharMap = buildCHarMap(firstString)
  const bCharMap = buildCHarMap(secondString)

  if (Object.keys(aCharMap).length != Object.keys(bCharMap).length) {
    return false
  }

  for (let char in aCharMap) {
    if (aCharMap[char] != bCharMap[char]) {
      return false
    }
  }

  return true

}
let result = anagrams("troog","groot" )
console.log(result)
