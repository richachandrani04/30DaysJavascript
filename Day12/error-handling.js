// Activity 1 -> Basic Error Handling with Try-Catch
//Task 1 -> Write a function that intentionally throws an error and use try catch block to handle error
const error = () => {
    let error = true
    try {
        if(error) {
            throw new Error("Something went wrong!")
        }
    } catch(e) {
        console.log(e.message)
    }
}

// error()

//Task 2 -> Create a function that divides two number and throws error if denominator is zero. Use try catch block to handle error.
const divide = (num1,num2) => {
    try{
        if(num1 % num2 === 0) {
            throw new Error("OPPs! remainder is zero!")
        }
    } catch(e) {
        console.log(e.message)
    }
}

// divide(4,2)



// Activity 2 -> Finally Block
//Task 3 -> Write a script that include a try-catch block and a finally block . Log message in try,catch and finally to observe the execution of the flow.
const observation = () => {
    try{
        console.log("Try block executed!")
    }catch{
        console.log("Catch block executed!")
    }finally{
        console.log("Finally block executed! It will execute everytime.")
    }
}

// observation()




// Activity 3 -> Custom Error Objects.
//Task 4 -> Create a custom error class that extends the built-in error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
const throwError = () => {
    throw new CustomError("This is a custom error message.");
}
try {
    // throwError();
} catch (e) {
    if (e instanceof CustomError) {
        console.error(`Caught a custom error: ${e.message}`);
    } else {
        console.error(`Caught an unexpected error: ${e.message}`);
    }
}

//Task 5 -> write a function that validates user input (e.g checking if a string is not empty) and throws a custom error if  the validation fails. Handle error using try-catch block.

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

const validateInput = (input) => {
    if (input.trim() === "") {
        throw new ValidationError("Input cannot be empty.");
    }
    console.log("Input is valid:", input);
}
try {
    // validateInput("");
} catch (e) {
    if (e instanceof ValidationError) {
        console.error(`Validation error: ${e.message}`);
    } else {
        console.error(`Unexpected error: ${e.message}`);
    }
}




// Activity 4 -> Error Handling in Promises.
//Task 6 -> Create a promise that randomly resolves or rejects. use catch() to handle rejection and log app. message
const random = () => {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.6
        setTimeout(() => {
            if(isSuccess) {
                resolve("Promise resolved successFully!")
            } else {
                reject("Promise rejected!")
            }
        },1000)
    })
}

// random().then((value) => {
//     console.log(value)
// }).catch(e => {
//     console.log(e)
// })

//Task 7 -> use try-catch within an async function to handle error from a promise that randomly resolve or reject
const handleRandomPromise = async () => {
    try {
        const message = await random();
        console.log(message);
    } catch (error) {
        console.error(`Caught an error: ${error}`);
    }
};

// handleRandomPromise();




// Activity 5 -> Graceful Error Handling in Fetch
// Task 8 -> use fetch api request data from an invalid url and handle the error using .catch().

const url = "https://invalidurl.example.com/data";
fetch(url)
.then(response => {
    if(!response.ok) {
        throw new Error("Something went wrong!");
    } else {
        return  response
    }
})
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log("Error fetching data!",error)
})


// Task 9 ->  use fetch api request data from an invalid url with an async function and handle the error using .catch().
async function fetchData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response;
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData()