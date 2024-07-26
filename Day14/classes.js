// Activity 1 -> Class definition

// Task 1 -> Define a class Person with properties name and age , and a method to return a greeting message.Create an instance of the class and log the greeting message

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello ${this.name} ! `
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }

    static genericMessage() {
        return "Hello from generic Message!"
    }
}

const person = new Person("Richa",20);
console.log(person.greet());

// Task 2-> Add a method to the Person class that update the age property and log the updated age
person.updateAge(15)



// Activity 2 -> class Inheritance
// Task 3 -> Define a class student that extends the person class. Add property studentId and a method to return student id. Create an instance of the student class and log the student id

class student extends Person {
    constructor(name,age,studentId) {
        super(name,age);
        this.studentId = studentId;
    }

    getStudentId() {
        return this.studentId;
    }

    greet() {
        // Override the greet method to include studentId
        return `Hello, my name is ${this.name}, and my student ID is ${this.studentId}.`;
    }


}

const studentInstance = new student("deep",19,"101")
// console.log(studentInstance)


// Task 4 -> Override the greeting method in the student class to include the studentId in the message. log the overridden message

// console.log(studentInstance.greet());

// Activity 3 -> Static Methods and Properties
// Add a static method to a Person class thats a generic greeting message. Class this static method without creating instance of a class

console.log(Person.genericMessage())
// console.log(person.genericMessage())


