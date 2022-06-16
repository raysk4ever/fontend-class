
const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const sumBtn = document.getElementById('sum-btn')
const result = document.getElementById('result')

function sum() {
    const one = parseInt(number1.value)
    const two = parseInt(number2.value)
    result.innerText = one + two
}