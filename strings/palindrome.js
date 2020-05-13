// Given a string, return true if the string is a palindrome

const reverseString = (str) => str.split('').reduce((reverse, char) => char + reverse, '')
const isPalindrome = (str) => {
  return reverseString(str) == str
}

console.log(isPalindrome("oppo"))