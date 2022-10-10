// const prompt = require('prompt-sync')();

let n1 = 10 // = prompt("Enter Num 1")
let n2 = 20 // = prompt("Enter Num 2")
let n3 = 30 // = prompt("Enter Num 3")
let n4 = 5 // = prompt("Enter Num 4")

// n1 = parseInt(n1);
// n2 = parseInt(n2);
// n3 = parseInt(n3);
// n4 = parseInt(n4);

if (n1 > n2)
{
    if (n1 > n3)
    {
        if (n1 > n4)
        {
            console.log(n1);
        }
    }
}
if (n2 > n1)
{
    if (n2 > n3)
    {
        if (n2 > n4)
        {
            console.log(n2);
        }
    }
}
if (n3 > n1)
{
    if (n3 > n2)
    {
        if (n3 > n4)
        {
            console.log(n3);
        }
    }
}
else {
  console.log(n4)
}