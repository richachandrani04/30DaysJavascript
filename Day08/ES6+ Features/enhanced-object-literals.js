// Activity 5 -> Enhanced Object Literals.

//Task 8 -> use enhanced object literals to create  an object  with methods and properties.

const name = "Ram";
const surname = "Desai";
const age = 20;
const propName = "favouriteColor";

const person = {
    name,           // Shorthand property name
    surname,
    age,
    fullName() {            //shorthand method definition
        return `${this.name} ${this.surname}`;
    }
}

console.log(person)
console.log(person.fullName())

//Task 9 -> Create an object with computed property names based on variables.
const person2 = {
    name,           // Shorthand property name
    surname,
    [propName] : "White"        // Computed property names

}
console.log(person2)


