// Activity 1 -> Function Declaration
//Task 1 ->Write a function to check if number is odd or even.
function oddOrEven(n) {
    if(n % 2 === 0) {
        return `${n} is an even number`;
    } else {
        return `${n} is an odd number`;
    }
}
console.log(oddOrEven(3))

//Task 2 ->Write a function to Calculate square of number.
function squareNumber(x) {
    return x*x;
}
console.log(squareNumber(153))