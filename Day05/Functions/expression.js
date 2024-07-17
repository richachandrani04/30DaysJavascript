// Activity 2 -> Function Expression
//Task 3 ->Write a function expression to find max of two number.

const maxNumber = function(n1,n2) {
    if((n1 >= 0) && (n2 >= 0)) {
        if(n1 > n2) {
            return `${n1} is greater`
        } else {
            return `${n2} is greater`
        }
    } else return "Incorrect number!"
}
console.log(maxNumber(534,891))

//Task 4 ->Write a function expression to concatenate two strings.
const concat = function(str1,str2) {
    return str1 + ' ' + str2
}
console.log(concat("Richa","Chandrani"))