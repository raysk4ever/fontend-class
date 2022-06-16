// // alert("Hiii")

// let a = 10
// let b = 30
// let c = a + b
// let ans = "Value of C is " + c
// console.log(ans)


let number1 = prompt("Enter 1st number?")
let number2 = prompt("Enter 2st number?")

number1 = parseInt(number1)
number2 = parseInt(number2)
const sum = number1 + number2
console.log(sum)

let result = null
let color = null

if (sum >= 100) {
    result = 'PASS'
    color = 'green'
} else {
    result = 'FAIL'
    color = 'red'
}

let myHeading = document.getElementById("sum")
myHeading.innerText = "Result is " + result
myHeading.style.color = color
