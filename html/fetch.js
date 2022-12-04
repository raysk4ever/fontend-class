// const url = 'https://jsonplaceholder.typicode.com/todos/3'
const url = 'https://gethire-admin.vercel.app/api/course?title=&showOnExploreList=true&lite=true&perPage=12&pageNumber=1&'

// fetch(url)
// .then(function (a) {
//  // runs when promise executed successfully 
//  console.log('inside then', )
//  return a.json()
// })
// .then(function (b) {
//   console.log('response', b)
// })

console.log('log 1')

// GET
fetch(url)
.then(response => response.json())
.then(data => {
  document.write(data.total)
})

console.log('log 2')
