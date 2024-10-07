/*const num1 = parseInt(prompt('Enter the first number'));
const num2 = parseInt(prompt('Enter the second number'));
// add = num1 + num2;
(num1 > num2) ? document.write("MAX is Number One") : document.write("MAX Number is Two");
*/

// const marks = parseInt(prompt('Enter the Mark :'))
// const age = parseInt(prompt('Enter the Mark :'))
// const result = (marks >= 40 && age >= 18) ? "PASS" : "Fail";
// document.write(result)

// let mark = parseInt(prompt('Enter the Mark :'));
// let result = (mark < 40) ? "Unsatisfactory" : (mark < 60) ? "Avarage" : (mark < 80) ? "Good" : "Excellent";
// document.write(result)

// const age = parseInt(prompt('Enter the Age :'))
// if (age >= 18)
//     document.write("Login Successfull")
// else
//     document.write("Login Fail")

let num1 = parseInt(prompt("Enter First Number"));
let num2 = parseInt(prompt("Enter Second Number"));
let num3 = parseInt(prompt("Enter Third Number"));
if (num1 > num2)
    if (num1 > num3)
        document.write("Large Number is Number One")
    else
        document.write("Large Number is Number Three")
else
    if (num2 > num3)
        document.write("Large Number is Number Two")
    else
        document.write("Large Number is Number Three")