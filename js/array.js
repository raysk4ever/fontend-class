const numbers = [1, 2, 3, 4, 5, 6]

// forEach, map, filter, some, every, reduce
// function in arg is called as callback function
let forEach = numbers.forEach(function (value, index, arr) {
  console.log('value', value)
  // console.log('index', index)
  // console.log('arr', arr)
  return '0'
})
console.log('forEach', forEach)

const map = numbers.map(function (value, index, arr) {
  console.log('value', value)
  return value + index
})

console.log('map', map)

const filter = numbers.filter(function (value, index, arr) {
  console.log('value', value)
  if (value % 2 === 0) {
    return true
  }
})

console.log('filter', filter)