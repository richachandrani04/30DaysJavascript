// Activity 4 -> Ternary Conditional Statement
//Task 6 ->Check odd or even number.

const checkOddOrEven = (n) => {
    const result = n % 2 === 0 ? "Even Number" : "Odd Number";
    console.log(result);
}
checkOddOrEven(24)

// Activity 5 -> Multiple conditional
//Task 7 ->Check leap year.
const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}
isLeapYear(2025)