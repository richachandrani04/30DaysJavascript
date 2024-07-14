// Activity 4 -> Logical Operators
//Task 11 -> Compare two numbers using &&
const CalculateResult = function(marks) {
    if(marks >= 35 && marks <=100) {
        console.log("Pass!")
    } else if(marks < 35) {
        console.log("Fail!")
    } else {
        console.log("Not a valid marks")
    }
}
CalculateResult(34)

//Task 12 -> Compare two numbers using ||
function checkNumber(num) {
    if (num === 0 || num < 0) {
        console.log( "The number is zero or negative.");
    } else {
        console.log( "The number is positive.");
    }
}
checkNumber(-3)

//Task 13 -> Compare two numbers using !
function checkNumberWithNegationSign(num) {
    if (!(num === 0 || num < 0)) {
        console.log( "The number is positive.");
    } else {
        console.log("The number is zero or negative.");
    }
}
checkNumberWithNegationSign(3)