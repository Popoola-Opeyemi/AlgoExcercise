// Writing Function to reverse a string


// Solution 1 
let reverseSolution = (str) => { str.split('').reverse((reverse, char => { char + reverse }), '') }


// Solution 2 

let reverseString = (str) => {
  let reverse = ""
  for (let a of str) {
    reverse = a + reverse
  }
  return reverse
} 