
// write a function that takes an argument of a positive numbeer
// function should console log a step shape with N lveels using the # character 
// make sure the steps have spaces on the righ hand side.
/*
E.g steps(2)
"#  "
"## "
"###"

*/

const steps = (Vnumber) => {
  let arr = []
  for (let a=0; a<=Vnumber; a++){
    let r = "#".repeat(a) + " ".repeat(Vnumber-a)
    console.log(r)
  }
}

const stepsRecursion = (n, row, stair='') => {

  if (n == row){
    return
  }

  if (n === stair.length){
    console.log(stair)
    return steps(n, row+1)
  }

  if (stair.length <= row){
    stair += "#"
  }
  else{
    stair +=' '
  }
  steps(n, row, stair)
}

let result = stepsRecursion(30)

// console.log(result)