// Activity 1 -> Creating and Exporting Modules.

//Task 1 -> Create a module that exports a function to add two numbers. Import and use this module in another script.
// import {add, subtract} from "./two.js";
// import divide from "./two.js"

import module from "./three.js";

const twoNumbers = (num1, num2) => {
    return num1 + num2
}

export {twoNumbers} ;

// Task 2 -> Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = {
    name: "Richa",
    age: 20,
    greet() {
        return `Hello ${this.name}! Welcome to the club.`
    },
    haveBirthday() {
        this.age +=1;
        return `Happy Birthday! You are now ${this.age} years old.`
    }
}

export {person} ;

// console.log(add(2,2))
// console.log(subtract(4,2))
// console.log(divide(16,4))

console.log(module())
