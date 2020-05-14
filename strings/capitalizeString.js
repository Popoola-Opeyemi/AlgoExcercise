// write a function that accepts a string. Function should capitalize the first letter of each 
// word and then return the capitalized string 

const capitalize = (str) => {
  let newString =""

  for(let a = 0; a<str.length; a++){
    
    if (str[a-1] == " " || a==0){
      newString += str[a].toUpperCase(); a++
    }
    newString +=str[a]
  }
  return newString
}

const result = capitalize("i am a king int? this fucking place and i love to be amonh them")

console.log(result)
