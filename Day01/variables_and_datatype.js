// Activity 1 -> Variable Declaration

//Task 1 -> Assign a variable using var
var num = 5
console.log(num)

//Task 1 -> Assign a variable using let
let str = "Javascript"
console.log(str)

// Activity 2 -> Constant Declaration
const bool = true
console.log(bool)

// Activity 3 -> Data Types
const number = 123
console.log(`The data type of ${number} is:`,typeof number)
const string = "Javascript"
console.log(`The data type of ${string} is:`,typeof string)
const boolean = false
console.log(`The data type of ${boolean} is:`,typeof boolean)
const object = {"name": "Javascript","day": "01"};
console.log(`The data type of ${JSON.stringify(object)} is:`,typeof object)
const array = ["Day", 1, "of", "Javascript"]
console.log(`The data type of ${array} is:`,typeof array)  //This will the return the typeOf object as arrays are a special type of object.
console.log(`Is the variable an array?`, Array.isArray(array));

// Activity 4 -> Reassigning Variables
let count = 0
console.log("The initial value of let variable is ",count)
count = count + 1
console.log("The reassign value of let variable is ",count)

// Activity 5 -> Understanding const
const count2 = 0
console.log("The initial value of const variable is ",count2)
// count2 = count2 + 1 // This will throw error as variable declared with const are immutable.
// console.log("The reassign value of const variable is ",count)
