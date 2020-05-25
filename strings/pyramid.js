/* write a function that accepts a number of positive number N
   the function should console log a pyramid shape 
   with N levels usnig the # character. Make sure the pyramid 
   has spaces on both the left and righ hand sides
*/

const Piramid2 = (n) =>{
  let midPoint = Math.floor(n*2-1)/2
  for (let row=0; row<n; row++){
    let level = ""
    for (let column=0; column<2*n-1; column++){
      if(midPoint - row <= column && midPoint+row >= column){
        level +="#"
      }
      else {
        level +=" "
      }
    }
    console.log(level)
  }
}

Piramid2(30)

const pyramid = (Pnumber) => { 
  const result = []
  let rval = Pnumber - 1
  for (let a=1; a< Pnumber ; a++){
    let cout = a*2 -1
    let repeater = " ".repeat(rval) + "#".repeat(cout) + " ".repeat(rval)
    rval =rval -1
    result.push(repeater)
  }
  return result
}


let res= pyramid(40)
console.log(res)