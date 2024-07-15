// Activity 1 -> If-Else Statements

//Task 1 ->Check if number is positive,negative or zero.
const checkNumber = (n) => {
    if(n > 0) {
        console.log(`${n} is positive number.`);
    } else if(n < 0) {
        console.log(`${n} is negative number.`);
    } else {
        console.log(`Number ${n} is zero.`);
    }
}
checkNumber(0)

//Task 2 ->Check if person is eligible to vote.
const checkEligibility = (age) => {
    if(age >= 18) {
        console.log("You are eligible to vote!");
    } else {
        console.log("You are not eligible to vote!");
    }
}
checkEligibility(18)