// for in
const user = {
  name: 'john',
  age: 10,
  country: 'india'
}

for (let key in user) {
  console.log(key, 'key')
}

for (let key in ['a', 'v', 'c']) {
  console.log(key, 'key')
}


// for of
for (let value of ['a', 'v', 'c']) {
  console.log('value', value)
}

// for (let value of user) {
//   console.log('value', value)
// }