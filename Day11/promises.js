// Activity 1 -> Understanding Promises
//Task 1 -> create a promise that resolves with a message after 2 second timeout and log the message
const message = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved with Promise")
    }, 2000)
})

message.then(result => console.log(result))

//Task 2 -> create a promise that rejects with an error message after 2 second timeout and handle the error message using catch().
const errorMessage = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true
        if (!error) {
            resolve("Resolved with Promise")
        } else {
            reject("Rejected Error Message")
        }
    }, 2000)
})
errorMessage
    .then(result => console.log(result))
    .catch(error => console.log(error))


// Activity 2 -> Chaining Promises
// Task 3 -> Create a sequence of promises that simulates fetching data from a server. Chain the promises to log messages in a specific order.
const chaining = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false
        if (!error) {
            resolve({username: "Richa", age: 20})
        } else {
            reject("Error in fetching data")
        }
    })
})

chaining.then(response => {
    return response;
}).then(result => {
    console.log(result)
}).catch(error => console.log(error))


// Activity 3 ->Using Async/Await
//Task 4 -> Write as async function that waits for a promise to resolve and log the result.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!")
    }, 1000)
})

async function waitForPromise() {
    let result = await myPromise
    console.log(result)
}

waitForPromise()

//Task 5 -> Write as async function that handles a rejected promise using try-catch and log error message
const myPromiseError = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve("Promise resolved!")
        } else {
            reject("Error fetching data")
        }
    }, 1000)
})

async function waitForPromiseError() {
    try {
        let result = await myPromiseError
        console.log(result)
    } catch(error) {
        console.log(error)
    }
}

waitForPromiseError()




// Activity 4 ->Fetching data from API
// Task 6 -> Use the fetch api to get data from public api and log the response data using promise
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

// Task 6 -> Use the fetch api to get data from public api and log the response data using async/await
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the async function to fetch data
fetchData();





// Activity 5 ->Concurrent Promises
// Task 8 -> Use Promise.all to wait  for multiple promises to resolve and then log the value
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 3000);
});

Promise.all([promise1,promise2,promise3])
    .then(values => {
        console.log(values)
    })
    .catch(error => {
        console.log(error)
    })


// Task 9 -> Use Promise.race to log the value pf the first promise that resolves among multiple promises.
Promise.race([promise1, promise2, promise3])
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.error('One of the promises rejected:', error);
    });
