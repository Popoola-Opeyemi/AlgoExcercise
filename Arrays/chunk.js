// Given an Array and Chunk size, divide the array into many
// subarrays where each subasrray is the length size


let chunk1 = (array, size) => {
  let prev = 0
  let next = size
  let chunked = []

  while (prev <= array.length) {
    chunked.push(array.slice(prev, next))
    prev += size
    next = next + size
    console.log(next)
  }
  console.log(chunked)
}

let chunk2 = (array, size) => {
  let chunked = []

  for (let element of array) {
    const last = chunked[chunked.length - 1]

    if (!last || last.length == size) {
      chunked.push([element])
    }
    else {
      last.push(element)
    }
  }
  console.log(chunked)
}

chunk([1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 2, 4, 6, 6, 7, 220, 5, 56, 9, 3, 2.3, 10], 3)


