// Given an Integer retrun an integer in the reverse order of number

const reverseInteger = (n) => {
  const result = n.toString().split('').reverse().join('');
  return parseInt(result) + Math.sign(n)
}

