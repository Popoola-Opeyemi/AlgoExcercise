let FizzBuzz = (n) => {

  for (let a = 1; a <= n; a++) {

    if (a % 3 === 0 && a % 5 === 0) {
      console.log("fizzbuzz")
    }
    else if (a % 3 === 0) {
      console.log("fizz")
    }
    else if (a % 5 === 0) {
      console.log("buzz")
    }
    else {
      console.log(a)
    }
  }
}

FizzBuzz(100)