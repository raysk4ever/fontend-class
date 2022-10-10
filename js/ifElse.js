// 1 -> Ternary Operator
// 2 -> if -> else
    // 2.1 -> if -> if -> if -> else if -> else => checks all the conditions if true or not
    // 2.2 -> if -> else if -> else => checks once the conditions if true and skips the rest
// 3 -> Switch

// let a = 1
// let b = 20

//  condition ? <runs when condition is true> : <runs when condition is false>

// console.log(
//   a > b ? 'a is bigger' : 'b is bigger'
// )

// let bigger = a === b ? 'a is bigger' : 'b is bigger'
// console.log(bigger)



/*
if (condition) {
  // block of if 
} else {
  // block of else
}

*/

// if (a === 0) {
//   console.log('a is 0')
// } if (a === 1) {
//   console.log('a is 1')
// } else {
//   console.log('a is not 0 and 1')
// }

// number = 0 => run =>
// number = even => run 
// number divisible 5 => run

// if (number = 0) {

// }
// else if (number = even) {

// }
// else if (number divisible 5) {

// }
// else {

// }


let a = 10
let b = 20
let c = 30

if (a > b && a > c) {
  console.log('a is bigger')
} else if (b > a && b > c) {
  console.log('b is bigger')
} else {
  console.log('c is bigger')
}

if (a > b && a > c && a > d) {
  console.log('a is bigger')
} else if (b > a && b > c && b > d) {
  console.log('b is bigger')
} else if (c > a && c > b && c > d) {
  console.log('c is bigger')
} else {
  console.log('d is bigger')
}