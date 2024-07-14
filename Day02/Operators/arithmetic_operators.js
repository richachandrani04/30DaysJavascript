// Activity 1 -> Arithmetic Operations
//Task 1 ->Add Two Numbers
const add = function (num1, num2) {
    let sum = num1 + num2
    console.log(`The Sum of ${num1} and ${num2} is`, sum)
    return sum;
}
add(20, 30)

//Task 2 -> Subtract Two Numbers
const subtract = function (num1, num2) {
    if (num1 >= num2) {
        let sub = num1 - num2
        console.log(`The Subtraction of ${num1} and ${num2} is`, sub)
        return sub;
    }
    console.log("Opps! Subtraction is not valid. Please enter valid numbers.");
}
subtract(10,20)

//Task 3 -> Multiply Two Numbers
const multiply = function (num1, num2) {
    let mult = num1 * num2
    console.log(`The Multiplication of ${num1} and ${num2} is`, mult)
    return mult;
}
multiply(10,20)

//Task 4 -> Divide Two Numbers
const divide = function (num1, num2) {
    let div = num1 / num2
    console.log(`The Division of ${num1} and ${num2} is`, div)
    return div;
}
divide(6,3)

//Task 5 -> Find remainder
const remainder = function (num1, num2) {
    let rem = num1 % num2
    console.log(`The Remainder of ${num1} and ${num2} is`, rem)
    return rem;
}
remainder(20,15)