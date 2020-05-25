/*
 Write a function that returns the number of a vowels
used in a string. Voewls are the characters "a", "e ,"i" , "o", "u"


*/

const getVowels= (str) => {
  const vowels = ["a","e","i","o","u"]
  let vWell = 0
  for(let a=0; a<str.length; a++){
    for(let b=0; b<vowels.length; b++){
      if(str[a].toLowerCase() == vowels[b]){
        vWell +=1
      }
    }
  }
  console.log(vWell)
}

const getVowels1 = (str) => {
  const matchs = str.match(/[aeiou]/gi)
  return matchs ? matchs.length : 0
}


const res = getVowels1("I am a")
console.log(res)