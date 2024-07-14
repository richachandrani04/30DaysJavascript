// Activity 3 -> Comparison Operators
//Task 8 -> Compare two numbers using > and <

function greaterThanLessThan(n1,n2) {
    if(n1 > n2) {
        console.log(`${n1} is greater than ${n2}`);
    } else if(n1 < n2) {
        console.log(`${n1} is smaller than ${n2}`);
    } else {
        console.log(`${n1} is equal to ${n2}`);
    }
}
greaterThanLessThan(5,4)

//Task 9 -> Compare two numbers using >= and <=
function greaterEqualAndLessEqual(n1, n2) {
    if(n1 >= n2) {
        console.log(`${n1} is greater than or equal to ${n2}`);
    } else if(n1 <= n2) {
        console.log(`${n1} is smaller than or equal to ${n2}`);
    } else {
        console.log(`Not a valid number!`);
    }
}
greaterEqualAndLessEqual(5,4)

//Task 10 -> Compare two numbers using == and ===

const num1 = 20
const num2 = "20"
console.log(num1 == num2) // -> true
console.log(num1 === num2) // -> false
